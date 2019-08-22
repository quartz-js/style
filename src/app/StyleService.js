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
    style.textField && container.set('$quartz.props.q-text-field', style.textField)
    style.textarea && container.set('$quartz.props.q-textarea', style.textarea)
    style.autocomplete && container.set('$quartz.props.q-autocomplete', style.autocomplete)
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
    let style = StyleService.get()

    let themes = {}

    if (style.colors) {
      themes.light = style.colors
      themes.dark = style.colors
    }

    return { 
      dark: false,
      themes: themes
    }
  }
}