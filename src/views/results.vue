<template>
	<!-- <div> -->
	<b-container fluid>
		<div class="results-hero-banner mb-3">
			<b-row>
				<b-col :sm="10" :md="8" :lg="6" :offset-sm="1" :offset-md="2" :offset-lg="3">
					<h3>iBuyer's in your area</h3>
					<p class="center">
						Checkout the available iBuyers near {{ zipCode }}. You can expand each section for even more
						detail.
					</p>
				</b-col>
			</b-row>
		</div>
		<b-row class="spacer">
			<b-col :sm="10" :md="8" :lg="6" :offset-sm="1" :offset-md="2" :offset-lg="3">
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
						</b-card-text>
						<!-- <h3 class=""><b-icon icon="arrow-down"></b-icon></h3> -->
					</b-card>
					<b-card
						border-variant="primary"
						header="Redfin"
						header-bg-variant="primary"
						header-text-variant="white"
						align="center"
					>
						<b-card-text>
							A home sale without the headache
							<ul class="text-left">
								<li>Get a no-obligation offer in a few days</li>
								<li>Close on your schedule</li>
								<li>move when you're ready</li>
							</ul>
							<!-- <h3><b-icon icon="arrow-down"></b-icon></h3> -->
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
							<!-- <h3><b-icon icon="arrow-down"></b-icon></h3> -->
						</b-card-text>
					</b-card>
				</b-card-group>
			</b-col>
		</b-row>
		<b-row class="mt-4">
			<b-col :sm="10" :md="8" :lg="6" :offset-sm="1" :offset-md="2" :offset-lg="3">
				<b-card no-body class="overflow-hidden">
					<b-row>
						<b-col md="3">
							<b-card-img
								:src="require('../assets/JohnWalker.png')"
								alt="Agent"
								class="rounded-1"
							></b-card-img>
						</b-col>
						<b-col md="9">
							<b-card-body title="Prefer to speak to a real agent?">
								<b-card-text>
									While many iBuyers offer convenience and a quick selling process, your most
									competitive offer will likely be brought to you from a dedicated agent who can list
									and market your home for you.
									<br />Click here to connect with an agent today!
								</b-card-text>
							</b-card-body>
						</b-col>
					</b-row>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
	<!-- </div> -->
</template>

<script>
import { BRow, BCol, BCardGroup, BCard, BCardText, BContainer } from "bootstrap-vue";

export default {
	name: "results",
	components: {
		BRow,
		BCol,
		BCardGroup,
		BCard,
		BContainer,
		BCardText,
	},
	props: {
		zipCode: Number,
	},
	methods: {},
	created() {},
};
</script>

<style lang="scss" scoped></style>
