/* This is the entry point */

// polyfills
import "es6-promise/auto";
import "weakmap"; // for vuexfire, using (imports-loader)

import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import { sync } from "vuex-router-sync";
import "./initFirebase";

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === "production") {
  require("./pwa");
}

Vue.config.productionTip = false;

// Sync the router with the vuex store. This registers `store.state.route`
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
