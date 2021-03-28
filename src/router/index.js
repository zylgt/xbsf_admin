import Vue from 'vue'
import Router from 'vue-router'


const manage = () => import('../pages/manage')
const login = () => import('../pages/login')

const collect = () => import('../pages/collect/collect')
const newCollect = () => import('../pages/collect/newCollect')

const compare = () => import('../pages/compare/compare')
const newCompare = () => import('../pages/compare/newCompare')

const schoolYear = () => import('../pages/schoolYear/schoolYear')

const grade = () => import('../pages/grade/grade')

const object = () => import('../pages/object/object')

const classs = () => import('../pages/class/class')

const user = () => import('../pages/user/user')
const newUser = () => import('../pages/user/newUser')

const author = () => import('../pages/author/author')

const role = () => import('../pages/role/role')

const account = () => import('../pages/account/account')

const dictionary = () => import('../pages/dictionary/dictionary')
const newDictionary = () => import('../pages/dictionary/newDictionary')

const regulation = () => import('../pages/regulation/regulation')
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
        path:'/collect',
        component: collect,
        name:'collect'
      },{
        path:'/newCollect',
        component: newCollect,
        name:'newCollect'
      },{
        path:'/compare',
        component: compare,
        name:'compare'
      },{
        path:'/newCompare',
        component: newCompare,
        name:'newCompare'
      },{
        path:'/schoolYear',
        component: schoolYear,
        name:'schoolYear'
      },{
        path:'/grade',
        component: grade,
        name:'grade'
      },{
        path:'/object',
        component: object,
        name:'object'
      },{
        path:'/user',
        component: user,
        name:'user'
      },{
        path:'/newUser',
        component: newUser,
        name:'newUser'
      },{
        path:'/class',
        component: classs,
        name:'classs'
      },{
        path:'/role',
        component: role,
        name:'role'
      },{
        path:'/author',
        component: author,
        name:'author'
      },{
        path:'/account',
        component: account,
        name:'account'
      },{
        path:'/dictionary',
        component: dictionary,
        name:'dictionary'
      },{
        path:'/newDictionary',
        component: newDictionary,
        name:'newDictionary'
      },{
        path:'/regulation',
        component: regulation,
        name:'regulation'
      }]
    }
  ]
})
