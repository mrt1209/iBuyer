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
    }
};
</script>

<style lang="scss" scoped>

</style>
