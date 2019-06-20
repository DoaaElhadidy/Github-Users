import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap';
import VueResource from 'vue-resource';

//---- FontAweseome Usage -----//
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faSpinner , faGlasses, faAnchor, faArchive, faBook, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faSpinner, faGlasses, faAnchor, faArchive, faBook, faBoxOpen );

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");