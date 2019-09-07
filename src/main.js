import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ArgonDashboard from './plugins/argon-dashboard'
import "flatpickr/dist/flatpickr.css";

Vue.config.productionTip = true;
Vue.use(ArgonDashboard)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
