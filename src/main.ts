import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin,  BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'; 

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)
