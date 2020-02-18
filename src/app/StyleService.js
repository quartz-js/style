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

  static load(tmpl)
  {
    return StyleService.update(StyleService.get(tmpl));
  }

  static reload()
  {
    let style = StyleService.get(container.get('settings').get('style.template', 'default'));

    StyleService.update(style)
  }

  static update(style)
  {
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

    if (container.get('$vue.app')) {
      container.get('$vue.app').$forceUpdate();
      window.bus.$emit('component.update');
    }
    container.set('style', style)
  }

  static getTheme()
  {
    return {

    }
  }
}