import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'table',
      component: (resolve) => {
        require(['../components/table'], resolve)
      }
    }, {
      path: '/table',
      name: 'table',
      component: (resolve) => {
        require(['../components/table'], resolve)
      }
    }, {
      path: '/choose',
      name: '弹出组件选择',
      component: (resolve) => {
        require(['../components/choose'], resolve)
      }
    }
  ]
})
