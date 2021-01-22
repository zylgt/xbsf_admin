import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const qx50 = () => import('../pages/qx50')
const qx50l = () => import('../pages/qx50l')
const mini3d = () => import('../pages/mini3d')
const miniprogram = () => import('../pages/miniprogram')
const manage = () => import('../pages/manage')
const login = () => import('../pages/login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      path: '/manage',
      name: 'manage',
      component: manage,
      children:[{
        path:'/miniprogram',
        component: miniprogram,
        name:'miniprogram'
      },{
        path:'/qx50',
        component: qx50,
        name:'qx50'
      },{
        path:'/qx50l',
        component: qx50l,
        name:'qx50l'
      },{
        path:'/mini3d',
        component: mini3d,
        name:'mini3d'
      }]
    }
  ]
})
