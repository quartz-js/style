import { container } from '@quartz/core'
import _ from 'lodash'
import TemplateDefault from '../templates/default'
import TemplateDarkOrange from '../templates/dark-orange'
import TemplateOldBootstrap from '../templates/old-bootstrap'

export class StyleService {

  static get(data)
  {
    return _.get({
      'default': TemplateDefault,
      'dark-orange': TemplateDarkOrange,
      'old-bootstrap': TemplateOldBootstrap,
      'custom': _.clone(container.get('settings').get('style', TemplateDefault))
    }, data )
  }

  static getStyle()
  {
    return StyleService.get(container.get('settings').get('style.template', 'default'));
  }

  static load(tmpl)
  {
    return StyleService.update(StyleService.get(tmpl));
  }

  static loadDefault()
  {
    let style = StyleService.get(container.get('settings').get('style.template', 'default'));

    StyleService.update(style)
  }

  static boot()
  {
    StyleService.loadDefault();
    StyleService.reload();

    /*window.addEventListener('resize', _.throttle(() => {
      StyleService.reload();
    }, 2000));*/
  }


  static reload()
  {
    if (container.get('$vue.app')) {
      container.get('$vue.app').$forceUpdate();
      window.bus.$emit('component.update');
    }
  }

  static useBreakpoints (style) {
    
    if (!style.breakpoints) {
      return style;
    }

    let clientWidth = window.innerWidth;

    for (let y in style.breakpoints.max) {
      var width = StyleService.getBreakpoint(y);

      if (clientWidth < width) {
        style = _.merge(style, style.breakpoints.max[y]);
      }
    }

    for (let y in style.breakpoints.min) {
      var width = StyleService.getBreakpoint(y);
      
      if (clientWidth >= width) {
        style = _.merge(style, style.breakpoints.min[y]);
      }
    }

    return style;
  }

  static getBreakpoint(text) {
    var breakpoints = {
      'xs': 0,
      'sm': 600,
      'md': 960,
      'lg': 1264,
      'xl': 1904
    };

    return breakpoints[text];
  }

  static update(style)
  { 
    style = StyleService.useBreakpoints(style);

    container.set('$quartz.props', style)

    if (style.general) {
      _.set(container.get('$vue.app'), `$vuetify.theme.dark`, style.general.dark)
    }
    
    if (style.colors) {
      _.map(style.colors, (value, key) => {
        _.set(container.get('$vue.app'), `$vuetify.theme.themes.light.${key}`, value)
      })
      _.map(style.colors, (value, key) => {
        _.set(container.get('$vue.app'), `$vuetify.theme.themes.dark.${key}`, value)
      })
    }

    container.set('style', style)
  }

  static getTheme()
  {
    let style = StyleService.getStyle();

    let obj = {}

    obj.themes = { 
      light: style.colors, 
      dark: style.colors
    };

    obj.dark = style.general.dark;

    return obj;
  }
}