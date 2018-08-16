import Vue from 'nativescript-vue';
import router from './router';
import http     from './shared/http';
import appMixin from './shared/appMixin';
import store from './store';
import * as application from "application";
import * as applicationSettings from 'application-settings';

import './styles.scss';
import './assets/css/custom.css';

// auto login if user has set keep login
application.on(application.launchEvent, (args) => {
  if (args.android) {
      let loginStored = applicationSettings.getString('login');
      if (loginStored && loginStored != '') {
        let loginData = JSON.parse(loginStored);
        store.commit('login', loginData);
        router.push('home');
      }
  }
});

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);

// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  'fa': './font-awesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({
  router,
  store,
}).$start();
