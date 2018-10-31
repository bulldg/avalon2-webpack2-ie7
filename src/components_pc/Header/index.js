import './index.scss'

import HeaderLogo from './Logo'
import HeaderNav from './Nav'

let template = 
`
<div class="header-index">
  <ms-header-logo class="header-index__item"></ms-header-logo>
  <ms-header-nav class="header-index__item"></ms-header-nav>
</div>
`

export default {
  name: 'ms-header',
  template,
  data () {
    return {}
  },
  components: {
    HeaderLogo,
    HeaderNav
  }
}
