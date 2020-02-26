<template>
    <div>
        <b-row>
            <b-col :lg="4">
                <h3 class="mb-4">Zillow</h3>
            </b-col>
            <b-col :lg="4">
                <h3 class="mb-4">Redfin</h3>
            </b-col>
            <b-col :lg="4">
                <h3 class="mb-4">Anotha one</h3>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
    name: "results",
    components: {
        BRow,
        BCol
    },
    methods: {},
    created() {}
};
</script>

<style lang="scss" scoped></style>
