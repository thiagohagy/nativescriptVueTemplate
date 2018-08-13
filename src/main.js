import Vue from 'nativescript-vue';
import router from './router';
import http     from './shared/services/http';
import appMixin from './shared/services/appMixin';
import store from './store';
// import * as tnsOAuthModule from "nativescript-oauth";

import './styles.scss';
import './assets/css/custom.css';

//oauth for facebook
// const facebookInitOptions = tnsOAuthModule.ITnsOAuthOptionsFacebook = {
//   clientId: "183780148921658",
//   clientSecret: "ce8e552f0e5f6c4ef25a2add1387390f",
//   scope: ["email"] //whatever other scopes you need
// };

// tnsOAuthModule.initFacebook(facebookInitOptions);

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
