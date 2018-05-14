/* eslint-disable dot-notation */
import Vue from 'vue';
import axios from 'axios';
import App from '@/view/App.vue';
import router from '@/view/router';
import store from '@/store/index';
import '@/registerServiceWorker';
import '@/design/styles.scss';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://vue-vuex-axios.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'Authorization';
axios.defaults.headers.get['Accepts'] = 'application/json';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
