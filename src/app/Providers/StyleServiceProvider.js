import { ServiceProvider, container } from '@quartz/core'
import { StyleService } from '../StyleService'
import _ from 'lodash'

export class StyleServiceProvider extends ServiceProvider {
  register() {
    container.get('$quartz.settings').addItem({
      name: 'style',
      header: () => import('../../components/StyleHeader'),
      content: () => import('../../components/StyleContent')
    })
  }
  boot() {
    return;
  }
}
