import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/Home.vue'
const product=()=>import('@/views/product/index.vue')
const List=()=>import('@/views/product/list/index.vue')
const Category=()=>import('@/views/product/category/index.vue')
const Order=()=>import('@/views/order/Index.vue')
const Colletc=()=>import('@/views/order/colletc/index.vue')
const Qingdan=()=>import('@/views/order/qingdan/index.vue')
const Audit=()=>import('@/views/order/audit/index.vue')
const Advertise=()=>import('@/views/advertise/Index.vue')
const list=()=>import('@/views/advertise/list/Index.vue')
Vue.use(VueRouter)
const routes=[{
    path:'/',
    component:Layout,
    children:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/product',
            name:'product',
            component:product,
            children:[
                {
            path:'list',
            name:'list',
            component:List
                },
            {
            path:'category',
            name:'categpry',
            component:Category
            }
            ]
        },{
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'colletc',
                    name:'colletc',
                    component:Colletc
                },
                {
                    path:'qingdan',
                    name:'qingdan',
                    component:Qingdan
                },
                {
                    path:'audit',
                    name:'audit',
                    component:Audit
                }
            ]
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'colletc',
                    name:'colletc',
                    component:Colletc
                },
                {
                    path:'qingdan',
                    name:'qingdan',
                    component:Qingdan
                },
                {
                    path:'audit',
                    name:'audit',
                    component:Audit
                }
            ]
        },
        {
            path:'/advertise',
            name:'advertise',
            component:Advertise,
            children:[
                {
                    path:'list',
                    name:'list',
                    component:list,
                }
            ]
        }
    ]
}
]
const router = new VueRouter({
    mode: 'history',
    routes,
   
})

export default router
