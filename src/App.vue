<template>
	<div id="app" class="app-parent">
		<b-navbar toggleable="sm" class="bg-transparent">
			<b-navbar-brand href="#">
				<b-img height="50" :src="require('./assets/Chooffer_logo_small.png')"></b-img> Chooffer
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
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
import { BNavbarBrand, BNavbarNav, BNavbar, BNavItem, BCollapse, BNavbarToggle, BImg } from "bootstrap-vue";
import HeroButton from "@/components/heroButton.vue";

export default {
	components: {
		BNavbarBrand,
		BNavbarNav,
		BNavbar,
		BNavItem,
		BCollapse,
		BNavbarToggle,
		BImg,
	},
};
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

.navbar {
	color: $white;
}

.app-parent {
	background-image: linear-gradient(to bottom right, $white, lighten($secondary, 40%), lighten($secondary, 20%));
	height: 100vh;
}
</style>
