import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Region from "../views/Region.vue";
import Country from "../views/Country.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/region/:region",
    name: "Region",
    component: Region,
  },
  {
    path: "/region/:region/country/:country",
    name: "Country",
    component: Country,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
