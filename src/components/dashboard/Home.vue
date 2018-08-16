<template>


<Page >

  <ActionBar title="Tags" class="action-bar">
    <!-- <NavigationButton android.systemIcon="ic_menu_day" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_delete" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_directions" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_edit" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_gallery" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_help" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_info_details" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_manage" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_month" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_more" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_my_calendar" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_mylocation" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_myplaces" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_preferences" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_recent_history" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_report_image" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_revert" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_rotate" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_save" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_send" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_set_as" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_slideshow" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_sort_alphabetically" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_today" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_upload" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_upload_you_tube" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_week" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_view" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_menu_zoom" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_notification_clear_all" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_notification_overlay" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_partial_secure" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_popup_disk_full" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_popup_reminder" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_popup_sync" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_search_category_default" @tap="toogleDrawerMenu" /> -->
    <!-- <NavigationButton android.systemIcon="ic_secure" @tap="toogleDrawerMenu" /> -->

    <NavigationButton android.systemIcon="ic_menu_sort_by_size" @tap="toogleDrawerMenu" />?
  </ActionBar>

  <GridLayout rows="*">

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="gray">
        <StackLayout height="56" style="text-align: center; vertical-align: center;">
          <Label text="Navigation Menu" />
        </StackLayout>
        <StackLayout>
          <Label text="Primary" padding="10" backgroundColor="lightgray" />
          <Label text="Social" padding="10" />
          <Label text="Promotions" padding="10" />
          <Label text="Labels" padding="10" backgroundColor="lightgray" />
          <Label text="Important" padding="10" />
          <Label text="Starred" padding="10" />
          <Label text="Sent Mail" padding="10" />
          <Label text="Drafts" padding="10" />
        </StackLayout>
      </StackLayout>

      <StackLayout ~mainContent>

        <ListView for="item in form.tags">
          <v-template>
            <Label :text="item.name" class="listItem"/>
          </v-template>
        </ListView>

      </StackLayout>
    </RadSideDrawer>
  </GridLayout>
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
      },
      menuIsOpen: false,
    }
  },
  methods: {
    ...mapGetters([
      'isLogged'
    ]),
    toogleDrawerMenu() {
      if(this.menuIsOpen) {
        this.$refs.drawer.nativeView.closeDrawer();
      } else {
        this.$refs.drawer.nativeView.showDrawer();
      }
      this.menuIsOpen = !this.menuIsOpen;
    },
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
      this.$router.push('login');
    }
  }
}

</script>

<style scoped>
</style>
