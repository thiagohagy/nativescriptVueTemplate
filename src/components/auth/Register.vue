<template>
  <Page class="page" actionBarHidden="true">

		<StackLayout orientation="vertical" verticalAlignment="center" >
      <Image id='logo' src='~/images/logo.png' width='50%' />
      <Label id='logoText' textAlignment='center' >User registration</Label>

      <TextField width='90%' v-model='form.name' hint='Name'  />
      <TextField width='90%' v-model='form.login' hint='Login...'  />
      <TextField width='90%' v-model='form.email' hint='Email...'  />
      <TextField width='90%' v-model='form.password' hint='Password...' secure='true' />
      <TextField width='90%' v-model='form.passwordConfirm' hint='Password confirm...' secure='true'  />

      <Button class="btn btn-primary" text="Confirm registration" @tap="register" />
      <Button class="btn btn-danger" text="Go back to login" @tap="goBack()" />

		</StackLayout>

  </Page>
</template>


<script>
  import Toast from 'nativescript-toast';

  export default {
    data () {
      return {
        form:{
          name:'User',
          login:'login',
          email:'email@email.com',
          password:'123',
          passwordConfirm:'123',
        }
      }
    },
    methods: {
      register(){

        if((!this.form.password || !this.form.login) || (this.form.password != this.form.passwordConfirm)) {
            Toast.makeText('Inform login, password, and password confirm').show();
          } else {
            this.$http.post('cli/add', this.form).then((response) => {
              if (response.success) {
                Toast.makeText('New user created').show();
                this.$router.push('login');
              } else {
                Toast.makeText(response.err).show();
              }
            });
          }
      },
      goBack(){
        this.$router.push('login');
      }
    }
  }

</script>
