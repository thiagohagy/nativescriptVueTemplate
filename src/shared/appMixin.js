
import Vue from 'nativescript-vue';

Vue.mixin({
  data() {
    return {
      icons: {},
    }
  },
  mounted() {
    // here you insert the icons that you want to use in the app
    this.icons = {
      search: 'fa-search',
      logout: 'fa-sign-out',
      tag: 'fa-tags',
    }
  },
})