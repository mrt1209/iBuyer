<template>
	<div class="home">
		<b-row>
			<b-col>
				<h3 class="mb-4">Find iBuyers near <u>27587</u></h3>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<hero-button buttonText="Start" route="newTest" class="center"></hero-button>
			</b-col>
		</b-row>
	</div>
</template>

<script>
// @ is an alias to /src
import HeroButton from "@/components/heroButton.vue";
import { BRow, BCol } from "bootstrap-vue";

export default {
	name: "home",
	components: {
		BRow,
		BCol,
		HeroButton
	},
	methods: {
		getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(this.showPosition);
			} else {
				alert("Sorry, but Geolocation is not supported by this browser.");
			}
		},

		showPosition(position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
			var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyC4IahdhXLAx24uUUvTKmqaFLQJKcoevS0";
			this.$axios.get(url).then(response => {
                this.results = response.data.results;
                // console.log(this.results);
			});
			// $.ajax({
			// 	type: "GET",
			// 	url: url,
			// 	dataType: "json",
			// 	success: function (msg) {
			// 		var results = msg.results;
			// 		var zip = results[0].address_components[7].long_name;
			// 		alert("Your zip code is: " + zip);
			// 	},
			// 	error: function (req, status, error) {
			// 		alert('Sorry, an error occurred.');
			// 		console.log(req.responseText);
			// 	}
			// });
		}
	},
	created() {
		this.getLocation();
	}
};
</script>

<style lang="scss" scoped></style>
