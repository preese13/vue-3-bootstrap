import Vue, { createApp } from '@vue/compat';
import BootstrapVue from 'bootstrap-vue';
import App from '../App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './scss/styles.scss'

Vue.use(BootstrapVue);
createApp(App).mount('#app')
