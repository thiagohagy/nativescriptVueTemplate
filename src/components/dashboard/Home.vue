<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Label class="fa" :text="icons.music | fonticon" />
      <Label class="fa" :text="icons.search | fonticon" />
      <Label class="fa" :text="icons.envelope | fonticon" />
    </StackLayout>

  </Page>
</template>


<script>
export default {
  data () {
    return {
      icons:{},
    }
  },
  mounted(){
    this.icons = {
      music: 'fa-music',
      search: 'fa-search',
      envelope: 'fa-envelope',
    }
  }
}
</script>
