<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      v-model="drawer"
      fixed
      app
      width="256"
      class="SideNav"
    >

    <div class="header-container" style="border-bottom: 1px solid rgba(255, 255, 255, 0.12);">
      <div class="HeaderBar">
          
        <div class="maintitle">
          <div class="maintitlea"><nuxt-link to="/login" id="SiteLogo">[Campus]</nuxt-link></div>
        </div>
      </div>
    </div>
       <!-- <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar> -->
      <div id="menlist">
  <v-expansion-panel expand dark style="box-shadow: none; border-bottom: 1px solid rgba(255, 255, 255, 0.12);"  > 
    <v-expansion-panel-content v-for="(section,i) in sections" :key="i"  style="background-color: #262f3d ">
      <div slot="header">{{section.title}}</div>
      <v-list dark  style="background-color: #19212b; ">
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in section.items"
          exact
          
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" style="font-size: 14px "></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
      </div>
    </v-navigation-drawer>

    <v-toolbar fixed app flat style="background-color: #80c7b9" >
      
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>



      <v-spacer></v-spacer>

    </v-toolbar>
    <v-content class="maincont">
      <v-flex>
        <nuxt />
      </v-flex>
    </v-content>


  </v-app>
</template>

<script>
  export default {

    data() {
      return {
        clipped: true,
        drawer: true,
        sections: [
          {title: 'Home',
           items: [
            { icon: 'apps', title: 'Dashboard', to: '/staff' },
            { icon: 'bubble_chart', title: 'My Markbooks', to: '/markbooks' }]
          },

          {title: 'Tools',
           items: [
            { icon: 'apps', title: 'Welcome', to: '/' },
            { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }]
          },
          {title: 'Search',
           items: [
            { icon: 'apps', title: 'Welcome', to: '/' },
            { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }]
          },
          {title: 'Information',
           items: [
            { icon: 'apps', title: 'Welcome', to: '/' },
            { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }]
          },
          {title: 'Help',
           items: [
            { icon: 'apps', title: 'Welcome', to: '/' },
            { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }]
          },
          {title: 'Maintenance',
           items: [
            { icon: 'apps', title: 'Create User', to: '/maintenance/users/createUser' },
            { icon: 'bubble_chart', title: 'Manage Users', to: '/maintenance/users/users' }]
          }],
        miniVariant: false,
        right: true,
        rightDrawer: false
      }
    }
  }
</script>

<style scoped>

#SiteLogo {
  color: #cfd8dc;
  text-decoration: none;
}

.maincont {
  background-color: #cfd8dc;
}



.list__tile--link:hover, .list__tile--highlighted {
  background-color: aqua !important;
}

  .SideNav {
    background-color: #262f3d;
  }
  .ExpandPanel {
    background-color: #262f3d !important; 
  }

 .menOption {
   font-size: 14px !important;
 }

  .HeaderBar {
    height: 60px;
    display:flex;
    align-items: center;
  }

.HeaderBar .logo {
    min-width: 60px;
    height: 60px;
    display:flex;
    align-items: center;
}

.HeaderBar .logo .logoa {
    flex-grow: 1;
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: 300;
}

.HeaderBar .maintitle {
    height: 60px;
    display:flex;
    align-items: center;
    flex-grow: 1;
}

.HeaderBar .maintitle .maintitlea {
    flex-grow: 1;
    font-size: 24px;
    color: white;
    font-weight: 300;
    text-align: center;
}

</style>