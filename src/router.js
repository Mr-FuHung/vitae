import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import one from './components/one.vue'
// import two from './components/two.vue'
// import three from './components/three.vue'
// import four from './components/four.vue'
// import five from './components/five.vue'
// import six from './components/six.vue'


export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/one'
        },
        {
            path: '/one',
            component: resolve => require(['./components/one.vue'], resolve)
        },
        {
            path: '/two',
            component: resolve => require(['./components/two.vue'], resolve)
        },
        {
            path: '/three',
            component: resolve => require(['./components/three.vue'], resolve)
        },
        {
            path: '/four',
            component: resolve => require(['./components/four.vue'], resolve)
        },
        {
            path: '/five',
            component: resolve => require(['./components/five.vue'], resolve)
        },
        {
            path: '/six',
            component: resolve => require(['./components/six.vue'], resolve)
        },
        {
            path: '/:path',
            redirect: to => {
                let rut = ["one", "two", "three", "four", "five", "six"],
                    pathOld = to.params.path;
                if (!rut.includes(pathOld)) {
                    console.log(rut.includes(pathOld))
                    return 'one'
                }
            }
        }
    ]
})