import "./firebase.js";
import App from "./App.vue";
import Vue from "vue";
import { rtdbPlugin } from "vuefire";

Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount("#app");
