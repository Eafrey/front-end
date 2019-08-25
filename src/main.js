import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/styles/index.scss';
import { Button } from 'element-ui';

Vue.use(Button);

Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
