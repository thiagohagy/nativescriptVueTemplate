
import Vue from 'nativescript-vue';
import { mapGetters } from 'vuex';

Vue.mixin({
  methods:{
    ...mapGetters([
      'isLogged',
    ]),
  },
  data() {
    return {
      icons: {},
    }
  },
  mounted() {
    this.icons = {
      music: 'fa-music',
      search: 'fa-search',
      envelope: 'fa-envelope-o',
    }
  },
})