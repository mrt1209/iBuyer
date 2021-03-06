import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/about",
		name: "about",
		component: () => import(/* webpackChunkName: "about" */ "../views/about.vue"),
	},
	{
		path: "/results",
		name: "results",
		props: true,
		component: () => import(/* webpackChunkName: "results" */ "../views/results.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
