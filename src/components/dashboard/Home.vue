<template>
  <app-container>
    <ListView for="item in form.tags">
      <v-template>
        <Label :text="item.name" class="listItem"/>
      </v-template>
    </ListView>
  </app-container>

</template>

<script>

import Toast from 'nativescript-toast';
import DrawerMenu from './../shared/drawerMenu.vue';

export default {
  data(){
    return {
      form:{
        tags:[]
      },
    }
  },
  beforeMount(){
    this.$http.get("v1/tag/all").then((response) => {
      if(response.total > 0) {
        this.form.tags = response.data;
      } else {
        Toast.makeText('Any tag was found').show()
      }
    });
  },
  components:{
    'app-container': DrawerMenu
  }
}

</script>

<style scoped>
</style>
