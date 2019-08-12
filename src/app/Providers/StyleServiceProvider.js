import { ServiceProvider } from '@quartz/core'

export class StyleServiceProvider extends ServiceProvider {
  register() {

    this.addLang({
      'en': require('../../../lang/en.json'),
      'it': require('../../../lang/it.json')
    })
  }
}
