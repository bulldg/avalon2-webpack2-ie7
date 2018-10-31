import './logo.scss'

let template =
`
<div class="header-logo">
  <a class="header-logo__body" href="/">
    <img class="header-logo__image" :attr="{src: logoUrl}"/>
  </a>
</div>
`

export default {
  name: 'ms-header-logo',
  template,
  data () {
    return {
      logoUrl: 'http://www.cscb.cn/images/logoer.png'
    }
  }
}
