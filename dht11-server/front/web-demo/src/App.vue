<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app clipped>
      <v-list dense>
        <v-list-tile to="/temperature">
          <v-list-tile-action>
            <v-icon>thermostat</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Temperature</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/humidity">
          <v-list-tile-action>
            <v-icon>water</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Humidity</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="red accent-4" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Home</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="red accent-4" app fixed>
      <span class="white--text">&copy; 2021 </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null
    }
  }
}
</script>
