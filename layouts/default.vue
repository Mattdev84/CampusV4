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
        <div class="logo">
          <div class="logoa">Logo</div>
        </div>
          
        <div class="maintitle">
          <div class="maintitlea">Campus</div>
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
  <v-expansion-panel expand dark style="box-shadow: none; border-bottom: 1px solid rgba(255, 255, 255, 0.12);" > 
    <v-expansion-panel-content v-for="(item,i) in 5" :key="i" :value="item === 2"  style="background-color: #262f3d ">
      <div slot="header">Item</div>
      <v-list dark  style="background-color: #19212b">
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>

    </v-navigation-drawer>

    <v-toolbar fixed app flat >
      
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>


      <v-spacer></v-spacer>

    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>


  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: true,
        drawer: true,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false
      }
    }
  }
</script>

<style scoped>
  .SideNav {
    background-color: #262f3d;
  }
  .ExpandPanel {
    background-color: #262f3d !important;
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
}

.HeaderBar .maintitle {
    height: 60px;
    display:flex;
    align-items: center;
}

.HeaderBar .maintitle .maintitlea {
    flex-grow: 1;
    padding-left: 20px;
    font-size: 24px;
    color: white;
    font-weight: 300;
}

</style>