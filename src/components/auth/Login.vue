<template>
  <Page class="page" actionBarHidden="true">

		<StackLayout orientation="vertical" verticalAlignment="center" >
      <Image id='logo' src='~/images/logo.png' width='50%' />
      <Label id='logoText' textAlignment='center' >My app</Label>

      <TextField width='90%' v-model='form.login'    hint='Login...'  />
			<TextField width='90%' v-model='form.password' hint='Senha' secure='true' />
      <Button class="btn btn-primary" text="Login" @tap="makeLogin" />
      <Button class="btn btn-primary" text="Register" @tap="register" />

		</StackLayout>

  </Page>
</template>


<script>

import Toaster from 'nativescript-toast';
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      form:{
        login:'',
        password:''
      }
    }
  },
  methods: {
    ...mapGetters([
      'isLogged',
    ]),
    ...mapActions([
      'login',
    ]),
    register(){
      this.$router.push('/home');
    },
    makeLogin(){
      // this.login();
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
  #logoText {
    font-size: 30px
  }

</style>
