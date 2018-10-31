import Router from 'extends/router'

import Index from '../page/Index'

export default new Router({
  routes: [
    {
      path: '/',
      title: 'PC首页',
      component: Index
    }
  ]
})
