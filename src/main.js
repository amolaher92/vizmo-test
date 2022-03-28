import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

Vue.config.productionTip = false

//define default axios API URL
axios.defaults.baseURL = 'https://620dfdda20ac3a4eedcf5a52.mockapi.io/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(axios)
Vue.use(PrimeVue, { ripple: true });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')