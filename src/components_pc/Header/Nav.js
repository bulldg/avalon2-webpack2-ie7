import './nav.scss'

let template = 
`
<ul class="header-nav">
  <li>
    <a href="javascript:;">
      <img src="http://www.cscb.cn/images/user_max.png"/>
      <span>个人业务</span>
    </a>
  </li>
</ul>
`

export default {
  name: 'ms-header-nav',
  template,
  data () {
    return {

    }
  }
}
