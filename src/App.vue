<template>
  <div id="app">
    <b-navbar toggleable="sm" variant="white">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Choofer</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/results">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  BIcon,
  BNavbarBrand,
  BNavbarNav,
  BNavbar,
  BNavItem
} from "bootstrap-vue";
import HeroButton from "@/components/heroButton.vue";
import axios from "axios";
Vue.prototype.$axios = axios;

@Component({
  components: {
    BIcon,
    BNavbarBrand,
    BNavbarNav,
    BNavbar,
    BNavItem,
    HeroButton
  }
})
export default class App extends Vue {
  // @Prop()
  // private displaySingleColumnList!: boolean;
  apiKey = "AIzaSyC4IahdhXLAx24uUUvTKmqaFLQJKcoevS0";
  google = null;
  map = null;
}
</script>

<style lang="scss">
@import "./styles/base.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.spacer {
  height: 100px;
}
</style>
