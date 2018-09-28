import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import one from './components/one.vue'
import two from './components/two.vue'
import three from './components/three.vue'
import four from './components/four.vue'
import five from './components/five.vue'

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/one'
    },
    {
        path: '/one',
        component: one
    },
    {
        path: '/two',
        component: two
    },
    {
        path: '/three',
        component: three
    },
    {
        path: '/four',
        component: four
    },
    {
        path: '/five',
        component: five
    },
    ]
})