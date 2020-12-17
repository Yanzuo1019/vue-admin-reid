import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import "./assets/css/MyTheme/index.css"
// import "./assets/css/main.css"
import service from "@/utils/request";

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.prototype.$axios = service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
