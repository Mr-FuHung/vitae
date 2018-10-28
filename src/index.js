// import './index.min.css';
import Vue from 'vue'
import app from './app.vue'
import store from './vuex/vuex.js'
import router from './router.js'
import VueAMap from 'vue-amap';
import "animate.css";

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: 'your amap key',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.10'
});
// Vue.config.productionTip = false
new Vue({
    el: '#app',
    template: '<app/>',
    components: {
        app
    },
    router,
    store
})