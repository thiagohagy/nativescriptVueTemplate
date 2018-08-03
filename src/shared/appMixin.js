
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

    if (!this.isLogged()) {
      console.log(`User not logged "mounted"`);
      // this.$router.push('/login');
    }
  },
  watch: {
    '$route': function (from, to) {
      if (!this.isLogged()) {
        console.log(`User not logged "watch route"`);
        // this.$router.push('/login');
      }
    }
  }
})