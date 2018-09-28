import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import one from './components/one.vue'

export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/one'
        },
        {
            path: '/one',
            component: one
        }
    ]
})