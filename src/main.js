import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Element from 'element-ui';

Vue.use(ElementUI);
//设置组件默认尺寸，以及弹框的初始z-index
Vue.use(Element, { size: "small", zIndex: 3000 });

Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
