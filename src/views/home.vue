<template>
	<div class="home d-flex">
		<b-container class="align-self-center">
			<b-row class="mb-3">
				<b-col :sm="12" :md="10" :lg="8" :offset-md="1" :offset-lg="2">
					<h3 class="mb-4">Let us help you Choose your best Offer!</h3>
					<h4>Enter your zip and click search to begin</h4>
				</b-col>
			</b-row>
			<b-row>
				<b-col :sm="10" :md="6" :lg="4" :offset-sm="1" :offset-md="3" :offset-lg="4">
					<b-form-input v-model="zipCode" size="lg" placeholder="Zip Code"></b-form-input>
				</b-col>
			</b-row>
			<b-row class="mt-4 pb-3">
				<b-col>
					<b-button :to="{ name: 'results', params: { zipCode: zipCode } }">Search</b-button>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { BRow, BCol, BContainer, BFormInput, BButton } from "bootstrap-vue";
import { findNearest } from "geolib";
import usZips from "us-zips/array";

export default {
	name: "home",
	components: {
		BRow,
		BCol,
		BContainer,
		BFormInput,
		BButton,
	},
	data() {
		return {
			zipCode: "",
		};
	},
	methods: {
		getLocation() {
			if (!navigator.geolocation) {
				alert("Your browser does not support geolocation");
			} else {
				navigator.geolocation.getCurrentPosition(this.showPosition);
			}
		},
		showPosition(position) {
			let lat = position.coords.latitude;
			let long = position.coords.longitude;
			let somewhere = {
				lat: lat,
				lng: long,
			};
			let location = findNearest(somewhere, usZips);
			this.zipCode = location.zipCode;
		},
	},
	mounted() {
		this.getLocation();
	},
};
</script>

<style lang="scss" scoped>
.home {
	overflow: hidden;
	margin-top: 150px;
}
</style>
