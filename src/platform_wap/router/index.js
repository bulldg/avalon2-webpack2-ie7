import Router from 'extends/router'

import Index from '../page/Index'

/*
  路由加平台前缀，例如 /wap/....
 */
export default new Router({
  routes: [
    {
      path: '/',
      title: 'wap首页',
      component: Index
    }
  ]
})
