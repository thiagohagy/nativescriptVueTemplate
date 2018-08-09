import Vue from 'nativescript-vue';
import router from './router';
import http     from './shared/services/http';
import appMixin from './shared/services/appMixin';
import store from './store';

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './font-awesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({
  router,
  store,
}).$start();
