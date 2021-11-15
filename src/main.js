import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./plugins/store";

Vue.use(VueRouter);

import router from "./plugins/router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
