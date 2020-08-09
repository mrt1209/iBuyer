<template>
    <div class="home">
        <b-container>
            <b-row>
                <b-col>
                    <h3 class="mb-4">Find iBuyers near you and choose your best offer</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="6" offset="3">
                    <b-form-input
                        v-model="zipCode"
                        size="lg"
                        placeholder="Zip Code"
                    ></b-form-input>
                </b-col>
            </b-row>
            <b-row class="mt-4">
                <b-col>
                    <hero-button buttonText="Search" route="results" class="center"></hero-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import HeroButton from "@/components/heroButton.vue";
import { BRow, BCol, BContainer, BFormInput } from "bootstrap-vue";

export default {
    name: "home",
    components: {
        BRow,
        BCol,
        BContainer,
        BFormInput,
        HeroButton,
    },
    data() {
        return {
            zipCode: "",
        };
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
            var url =
                "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                lat +
                "," +
                long +
                "&key=AIzaSyC4IahdhXLAx24uUUvTKmqaFLQJKcoevS0";
            this.$axios.get(url).then((response) => {
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
        },
    },
    created() {
        this.getLocation();
    },
};
</script>

<style lang="scss" scoped></style>
