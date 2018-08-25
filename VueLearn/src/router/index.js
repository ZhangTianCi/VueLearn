import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: '首页',
        menus: [
          { name: '子链接1', href: 'www.baidu.com' },
          { name: '子链接1', href: 'www.baidu.com' },
          { name: '子链接1', href: 'www.baidu.com' }, 
          { name: '子链接1', href: 'www.baidu.com' },
          { name: '子链接1', href: 'www.baidu.com' },
          { name: '子链接1', href: 'www.baidu.com' },
          { name: '子链接1', href: 'www.baidu.com' }
        ]
      },
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
