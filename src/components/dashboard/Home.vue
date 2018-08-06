<template>
  <Page class="page" actionBarHidden="true">

		<StackLayout orientation="vertical" verticalAlignment="center" >
      <Image id='logo' src='~/images/logo.png' width='50%' />
      <!-- <Label class='fa' :text="icons.envelope | fonticon"/> -->
		</StackLayout>

  </Page>
</template>


<script>

import Toaster from 'nativescript-toast';
import { mapGetters } from 'vuex';

export default {
  methods: {
    ...mapGetters([
      'isLogged'
    ]),
  },
  mounted(){
    if(!this.isLogged()){
      this.$router.push('/login');
    }
  }
}

</script>

<style scoped>
</style>
