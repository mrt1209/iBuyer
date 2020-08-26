<template>
	<div id="app">
		<b-navbar toggleable="sm" variant="white">
			<b-navbar-brand class="pr-3" href="#"><b-img height="50" :src="require('./assets/compass-logo.jpg')"></b-img> iBuyer Guide </b-navbar-brand>
			<b-collapse id="nav-text-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="/results">Search Results</b-nav-item>
					<b-nav-item to="/about">About</b-nav-item>
					<b-nav-item to="/Resources">Resources</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BIcon, BNavbarBrand, BNavbarNav, BNavbar, BNavItem, BCollapse, BNavbarToggle, BImg } from "bootstrap-vue";
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
		BCollapse,
		BNavbarToggle,
		BImg,
		HeroButton,
	},
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
