// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.devtools = true
import LayoutTop from './Layout/Top.vue'
import LayoutTMain from './Layout/Main.vue'
import router from './router'

Vue.config.productionTip = false
let VueLayoutMain = new Vue({
  el: '#Layout_Main>*',
  router,
  components: { LayoutTMain },
  template: '<LayoutTMain/>'
})

let VueLayoutTop = new Vue({
  el: '#Layout_Top>*',
  router,
  components: { LayoutTop },
  template: '<LayoutTop/>'
})
