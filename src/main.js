import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./plugins/bootstrap-vue.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
