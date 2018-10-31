import '@/assets/style_wap/weui.css'
import '@/assets/style_wap/app.scss'

import Ref from 'directives/ref'

let template =
`
<div>
  <ms-router-view />
</div>
`

export default {
  name: 'wap',
  template,
  data () {
    return {}
  },
  directives: {
    Ref
  },
  methods: {
    onReady () {
      console.log(12312)
    }
  }
}
