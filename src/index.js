import './index.css';
import Vue from 'vue';

// Vue.config.productionTip = false
new Vue({
    el:'#app',
    data:{
        msg:123
    },
    created() {
        console.log(1)
    }
})
