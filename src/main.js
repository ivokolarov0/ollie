import Vue from 'vue';
import App from './App.vue';

import './assets/scss/main.scss';
import store from './store';

Vue.config.productionTip = false;

Vue.component('v-style', {
  render: function(createElement) {
    return createElement('style', this.$slots.default);
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
