import { container } from '@quartz/core'
import _ from 'lodash'

export class StyleService {

  static get()
  {
    return JSON.parse(container.get('settings').get('style', '{}'))
  }

  static reload()
  {
    let style = StyleService.get();
    style.form && container.set('$quartz.props.q-text-field', style.form.basic)
    style.button && container.set('$quartz.props.q-btn', style.button.basic)
    style.sidebar && container.set('$quartz.props.q-sidebar', style.sidebar)
    style.card && container.set('$quartz.props.q-card', style.card)

    if (style.general) {
      _.set(container.get('$vue.app'), `$vuetify.theme.dark`, style.general.dark)
    }
    
    if (style.colors) {
      _.map(style.colors, (value, key) => {
        _.set(container.get('$vue.app'), `$vuetify.theme.themes.light.${key}`, value)
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
    let style = StyleService.get()

    let themes = {}

    if (style.colors) {
      themes.light = style.colors
    }

    return { 
      dark: false,
      themes: themes
    }
  }
}