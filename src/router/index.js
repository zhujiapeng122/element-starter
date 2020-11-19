import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import App from '../App';
import Layout from '../views/layout/layout'
import Learn from '../views/learn/learn'

Vue.use(Router)  //Vue全局使用Router

export default new Router({
    routes: [              //配置路由，这里是个数组
        {
            path: '/',
            component: Layout,
            redirect: '/layout'
        },
       {
            path: '/layout',
            name: 'layout',
            component: Layout
        },
        {
            path: '/learn',
            name: 'learn',
            component: Learn
        }
    ]
})

