<template>
  <div class="home bg-secondary d-flex">
    <b-container class="align-self-center">
      <b-row class="mb-3">
        <b-col :sm="12" :md="10" :lg="8" :offset-md="1" :offset-lg="2">
          <h3 class="mb-4">We'll help guide you to the best buyers in your area</h3>
          <h4>Enter your zip and select search to begin</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          :sm="10"
          :md="6"
          :lg="4"
          :offset-sm="1"
          :offset-md="3"
          :offset-lg="4"
        >
          <b-form-input
            v-model="zipCode"
            size="lg"
            placeholder="Zip Code"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <hero-button
            buttonText="Search"
            route="results"
            class="center"
          ></hero-button>
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
    HeroButton
  },
  data() {
    return {
      zipCode: ""
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
        lng: long
      };
      let location = findNearest(somewhere, usZips);
      this.zipCode = location.zipCode;
    }
  },
  mounted() {
    this.getLocation();
  }
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 275px;
}
</style>
