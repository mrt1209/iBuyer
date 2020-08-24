<template>
    <div class="home bg-secondary d-flex">
        <b-container class="align-self-center">
            <b-row>
                <b-col>
                    <h3 class="mb-4">Find iBuyers near you and choose your best offer</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4" offset="4">
                    <b-form-input v-model="zipCode" size="lg" placeholder="Zip Code"></b-form-input>
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
import { findNearest } from "geolib";
import usZips from "us-zips/array";

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
            if (!navigator.geolocation) {
                // status.textContent = "Geolocation is not supported by your browser";
            } else {
                // status.textContent = "Locating…";
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
    min-height: 250px;
}
</style>
