
<template>
  <Page >
    <ActionBar :title="pageName" class="action-bar">
      <NavigationButton android.systemIcon="ic_menu_sort_by_size" @tap="toogleDrawerMenu" />?
    </ActionBar>

    <GridLayout rows="*">
      <RadSideDrawer ref="drawer">
        <StackLayout ~drawerContent backgroundColor="gray">
          <StackLayout height="56" style="text-align: center; vertical-align: center;">
            <Label text="Navigation Menu" />
          </StackLayout>
          <StackLayout>
            <Label text="Menu" padding="10" backgroundColor="lightgray" />
            <Label text="Home"  @tap="goto('home')" padding="10" />
            <Label text="Others" padding="10" backgroundColor="lightgray" />
            <Label class="fa" @tap="makeLogout()" padding="10" >Logout {{ icons.logout| fonticon}}</Label>
          </StackLayout>
        </StackLayout>

        <StackLayout ~mainContent>
          <slot></slot>
        </StackLayout>

      </RadSideDrawer>
    </GridLayout>
  </Page>
</template>

<script>

  import Toast from 'nativescript-toast';
  import { mapMutations } from 'vuex';

  export default {
    data(){
      return {
        pageName: '',
      }
    },
    methods:{
      ...mapMutations([
        'logout',
      ]),
      toogleDrawerMenu() {
        // toogle menu
        this.$refs.drawer.nativeView.toggleDrawerState();
      },
      makeLogout(){
        // clear login data and redirect
        this.logout();
        this.$router.push('login');
        Toast.makeText('Byyye').show();
      },
      goto(route) {
        this.$router.push(route);
      }
    },
    created(){
      // set the last meta name as page name
      this.pageName = this.$route.matched[this.$route.matched.length-1].meta.title;
    },
  }
</script>
