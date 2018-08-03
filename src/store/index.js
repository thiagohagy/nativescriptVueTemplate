import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    auth,
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;