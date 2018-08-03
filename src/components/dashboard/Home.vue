<template>
  <Page class="page" actionBarHidden="true">

		<StackLayout orientation="vertical" verticalAlignment="center" >
      <Image id='logo' src='~/images/logo.png' width='50%' />
      <Label id='logoText' textAlignment='center' >My app</Label>

      <TextField width='90%' v-model='form.login'    hint='Login...'  />
			<TextField width='90%' v-model='form.password' hint='Senha' secure='true' />
      <Button class="btn btn-primary" text="Login" @tap="login" />
      <Button class="btn btn-primary" text="Register" @tap="register" />

		</StackLayout>

  </Page>
</template>


<script>

import iconsMixin from './../../shared/iconsMixin.js';
import Toaster from 'nativescript-toast';

export default {
  mixins: [iconsMixin],
  data () {
    return {
      form:{
        login:'',
        password:''
      }
    }
  },
  methods: {
    register(){
      Toaster.makeText('Go to register').show();
    },
    login(){
      Toaster.makeText('Go to login').show();
    }
  }
}
</script>

<style scoped>
  #logoText {
    font-size: 30px
  }

</style>
