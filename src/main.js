import Vue from "vue";
import App from "./App.vue";
import jQuery from "jquery";
import { router } from "./router";
Vue.config.productionTip = false;
window.jQuery = jQuery;
new Vue({
  el: "#app",
  components: { App },
  // render: h => h(App),
  router,
  template: "<App/>"
}).$mount("#app");
