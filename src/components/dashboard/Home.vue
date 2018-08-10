<template>
  <Page >
    <ActionBar title="Tags" class="action-bar">
    </ActionBar>

    <ListView for="item in form.tags">
      <v-template>
        <Label :text="item.name" class="listItem"/>
      </v-template>
    </ListView>
  </Page>
</template>


<script>

import Toaster from 'nativescript-toast';
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      form:{
        tags:[]
      }
    }
  },
  methods: {
    ...mapGetters([
      'isLogged'
    ]),
  },
  beforeMount(){
    this.$http.get("v1/tag/all").then((response) => {
      if(response.total > 0) {
        this.form.tags = response.data;
      } else {
        Toaster.makeText('Any tag was found').show()
      }
    });

    if(!this.isLogged()){
      this.$router.push('/login');
    }
  }
}

</script>

<style scoped>
</style>
