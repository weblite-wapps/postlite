// modules
import Vue from "vue";

// components
import App from "./App.vue";
import store from './store'

Vue.config.productionTip = false;
new Vue({
render: h => h(App),
    store
}).$mount("#app");
