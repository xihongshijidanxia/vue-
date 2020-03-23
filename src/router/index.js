import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MyIndex from '../components/pages/index'
import MyOne from '../components/pages/one'
import MyTwo from '../components/pages/two'
import MyThree from '../components/pages/three'
import MyFour from '../components/pages/four'
import Myhaha from '../components/pages/haha'
import Mydrindex from '../components/pages/drindex'
import Mydrpic from '../components/pages/drpic'
import Mywangzhe from '../components/pages/wangzhe'
import Myhzw from '../components/pages/hzw'

import Mykeep from '../components/pages/keep'   // 试验 keep-alive
import Mykeeps from '../components/pages/keeps'   // 试验 keep-alive

import Mychihuo from '../components/pages/drchi'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/index',
      component: MyIndex
    },
    {
      path: '/One',
      component: MyOne
    },
    {
      path: '/two',
      component: MyTwo
    },
    {
      path: '/three',
      component: MyThree
    },
    {
      path: '/four',
      component: MyFour
    },
    {
      path: "/haha",
      component: Myhaha,
      children: [
        {
          path: 'keep',
          component: Mykeep
        },
        {
          path: 'keeps',
          component: Mykeeps,
          meta: {
            keepAlive: true   // 需要缓存的页面
          }

        },
        {
          path: 'drindex',
          component: Mydrindex
        },
        {
          path: 'drpic',
          name: 'xiangqing',
          component: Mydrpic
        },
        {
          path: 'wangzhe',
          component: Mywangzhe
        },
        {
          path: 'hzw',
          component: Myhzw
        },
        {
          path: 'chihuo',
          component: Mychihuo
        },

        {
          path: "",
          redirect: "drindex"
        },
      ]
    },
    // {
    //   path:'/drindex',
    //   component:Mydrindex
    // },
    // {
    //   path:'/drpic',
    //   name:'xiangqing',
    //   component:Mydrpic
    // },
    // {
    //   path:'/wangzhe',
    //   component:Mywangzhe
    // },
    // {
    //   path:'/hzw',
    //   component:Myhzw
    // },
    {
      path: "*",
      redirect: "/index"
    },

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
