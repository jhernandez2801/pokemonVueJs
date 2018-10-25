import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueMaterial);

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
