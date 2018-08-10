<template>
  <Page class="page" actionBarHidden="true">

		<StackLayout orientation="vertical" verticalAlignment="center" >
      <Image id='logo' src='~/images/logo.png' width='50%' />
      <Label id='logoText' textAlignment='center' >My app</Label>

      <TextField width='90%' v-model='form.login'    hint='Login...'  />
			<TextField width='90%' v-model='form.password' hint='Senha' secure='true' />
      <Button class="btn btn-primary" text="Login" @tap="makeLogin" />
      <!-- <Button class="btn btn-primary" text="Register" @tap="register" /> -->

		</StackLayout>

  </Page>
</template>


<script>

import Toaster from 'nativescript-toast';
import { mapGetters, mapMutations } from 'vuex';

export default {
  data () {
    return {
      form:{
        login:'',
        password:'',
      }
    }
  },
  methods: {
    ...mapGetters([
      'isLogged',
    ]),
    ...mapMutations([
      'login',
    ]),
    register(){
      this.$router.push('/register');
    },
    makeLogin(){
      this.$http.post("login", this.form ).then((response) => {
        if (response.success) {
          this.login(response);
          this.$router.push('/home');
        } else {
          Toaster.makeText('User not found').show();
        }
      });
    },
  },
  mounted(){
    this.form = {
      login: 'Admin',
      password: 'admin',
    }
  //   this.makeLogin()
  }
}
</script>

<style scoped>
  #logoText {
    font-size: 30px
  }

</style>
