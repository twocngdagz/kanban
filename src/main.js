import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import store from './store/index'
import VModal from 'vue-js-modal'
Vue.use(VModal)

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
