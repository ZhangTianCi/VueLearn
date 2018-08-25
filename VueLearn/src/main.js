// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.devtools = true

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import router from './router'
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
import Index from './Index.vue'

Vue.config.productionTip = false

new Vue({
  el: 'body>*',
  router,
  components: { Index },
  template: '<Index/>'
})
