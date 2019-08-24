<script>

import StyleContentCommon from './StyleContentCommon'
import StyleContentNavigationDrawer from './StyleContentNavigationDrawer'

export default {
  extends: StyleContentNavigationDrawer,
  mixins: [
    StyleContentCommon
  ],
  data: () => ({
    settings: {
      color: '#ffffff',
      stateless: false,
      dark: false,
      right: false,
      clipped: true,
      fixed: true,
      miniVariant: false,
      expandOnHover: false,
      temporary: true,
      floating: false,
      permanent: false,
      permanent: false
    }
  })
}
</script>