import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import eidtor from "vue-editor-js";
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(eidtor);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
