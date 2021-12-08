import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";

//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
//defined as global component
Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);

Vue.config.productionTip = false;

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
