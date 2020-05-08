import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Region from "../views/Region.vue";
import Country from "../views/Country.vue";
import Search from "../components/Search.vue";
import Loading from "../components/Loading.vue";

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
    path: "/region/:region/country/:id",
    name: "Country",
    component: Country,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/loading",
    name: "Loading",
    component: Loading,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
