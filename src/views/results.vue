<template>
    <div>
        <b-container>
            <b-row>
                <b-col :cols="4" :offset="4">
                    <h3>iBuyer's in your area</h3>
                    <p class="center">
                        Checkout the available iBuyers in your area. You can expand each section for even more detail.
                    </p>
                </b-col>
            </b-row>
            <br />
            <br />
            <b-row>
                <b-card-group deck>
                    <b-card
                        border-variant="primary"
                        header="Zillow Offers"
                        header-bg-variant="primary"
                        header-text-variant="white"
                        align="center"
                    >
                        <b-card-text>
                            Get a no-obligation offer directly from Zillow
                            <ul class="text-left">
                                <li>No staging</li>
                                <li>No hidden fees</li>
                                <li>No surprises</li>
                            </ul>
                            <h3><b-icon icon="arrow-down"></b-icon></h3>
                        </b-card-text>
                    </b-card>
                    <b-card
                        border-variant="primary"
                        header="Redfin"
                        header-bg-variant="primary"
                        header-text-variant="white"
                        align="center"
                    >
                        <b-card-text
                            > A home sale without the headache
                            <ul class="text-left">
                                <li>Get a no-obligation offer in a few days</li>
                                <li>Close on your schedule</li>
                                <li>move when you're ready</li>
                            </ul>
                            <h3><b-icon icon="arrow-down"></b-icon></h3>
                        </b-card-text>
                    </b-card>
                    <b-card
                        border-variant="primary"
                        header="Open Door"
                        header-bg-variant="primary"
                        header-text-variant="white"
                        align="center"
                    >
                        <b-card-text>
                            Sell to Opendoor and skip the hassle of listing
                            <ul class="text-left">
                                <li>Request your offer online</li>
                                <li>No prep work or showings</li>
                                <li>Get a competitive cash offer within 24 hours</li>
                            </ul>
                            <h3><b-icon icon="arrow-down"></b-icon></h3>
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { BRow, BCol, BContainer, BCardGroup, BCard, BCardText } from "bootstrap-vue";

export default {
    name: "results",
    components: {
        BContainer,
        BRow,
        BCol,
        BCardGroup,
        BCard,
        BCardText
    },
    methods: {},
    created() {}
};
</script>

<style lang="scss" scoped></style>
