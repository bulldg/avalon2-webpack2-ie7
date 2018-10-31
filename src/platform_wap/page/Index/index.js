import '@/assets/style_pc/index.scss'
import './index.scss'

let template = `
<div class="bcs-wap__index">
  <p>{{ title }}</p>
  <div class="index-slogn">asdfasdfasd</div>
</div>
`

export default {
  name: 'wap-index',
  template,
  data () {
    return {
      title: 'this is wap index.'
    }
  }
}
