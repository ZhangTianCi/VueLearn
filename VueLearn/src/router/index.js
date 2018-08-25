import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/Welcome.vue'

import ProductBrowse from '@/Product/Browse.vue'
import ProductAudit from '@/Product/Audit.vue'

import StatisticsCategory from '@/Statistics/Category.vue'
import StatisticsPlanning from '@/Statistics/Planning.vue'

import SystemCategory from '@/System/Category.vue'
import SystemPlanning from '@/System/Planning.vue'
import SystemPush from '@/System/Push.vue'

import ImportDataFromExcel from '@/Data/ImportFromExcel.vue'

Vue.use(Router)

let Menus = {
  Product: [
    { name: '产品库', routeName: 'ProductBrowse' },
    { name: '数据审核', routeName: 'ProductAudit' },
  ],
  Statistics: [
    { name: '商品组', routeName: 'StatisticsCategory' },
    { name: 'SKU规划', routeName: 'StatisticsPlanning' },
  ],
  System: [
    { name: '商品组', routeName: 'SystemCategory' },
    { name: 'SKU规划', routeName: 'SystemPlanning' },
    { name: '推送用户', routeName: 'SystemPush' },
  ]
}
export default new Router({
  routes: [
    { path: '/', name: 'Basic', redirect: { name: 'Welcome' } },
    { path: '/Welcome', name: 'Welcome', component: Welcome, meta: { title: '首页', menus: [] } },
    { path: '/Product/Browse', name: 'ProductBrowse', component: ProductBrowse, meta: { title: '浏览产品', menus: Menus.Product } },
    { path: '/Product/Audit', name: 'ProductAudit', component: ProductAudit, meta: { title: '审核数据', menus: Menus.Product } },
    { path: '/Statistics/Category', name: 'StatisticsCategory', component: StatisticsCategory, meta: { title: '按商品组统计', menus: Menus.Statistics } },
    { path: '/Statistics/Planning', name: 'StatisticsPlanning', component: StatisticsPlanning, meta: { title: '按SKU规划统计', menus: Menus.Statistics } },
    { path: '/System/Category', name: 'SystemCategory', component: SystemCategory, meta: { title: '配置商品组', menus: Menus.System } },
    { path: '/System/Planning', name: 'SystemPlanning', component: SystemPlanning, meta: { title: '配置SKU规划', menus: Menus.System } },
    { path: '/System/Push', name: 'SystemPush', component: SystemPush, meta: { title: '配置微信推送', menus: Menus.System } },
    { path: '/Data/ImportFromExcel', name: 'ImportDataFromExcel', component: ImportDataFromExcel, meta: { title: '从Excel导入数据', menus: [] } }

  ]
})
