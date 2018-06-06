import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solids from '@fortawesome/fontawesome-free-solid/'
import App from './app/app';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

fontawesome.library.add(brands, solids)

new Vue({
  el: '#app',
  render: h => h(App)
});
