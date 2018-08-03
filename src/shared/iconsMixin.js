
var iconsMixin = {
  data () {
    return {
      icons:{},
    }
  },
  mounted() {
    this.icons = {
      music: 'fa-music',
      search: 'fa-search',
      envelope: 'fa-envelope-o',
    }
  }
}