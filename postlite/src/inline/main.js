// modules
import Vue from "vue";

// components
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({ render: h => h(App) }).$mount("#app");
