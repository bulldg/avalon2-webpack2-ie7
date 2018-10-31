import '@/assets/main.scss'
import '@/assets/style_wap/app.scss'

import Ref from 'directives/ref'
import Tooltip from '@/directives_pc/tooltip'
import Datepicker from '@/directives_pc/datepicker'
import Placeholder from '@/directives_pc/placeholder'

import Header from '@/components_pc/Header'

let template =
`
<div>
  <ms-header></ms-header>
  <ms-router-view />
</div>
`

export default {
  name: 'app',
  template,
  data () {
    return {}
  },
  components: {
    'ms-header': Header
  },
  directives: {
    Ref,
    Tooltip,
    Datepicker,
    Placeholder
  }
}
