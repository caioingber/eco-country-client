import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    loadCountries({ commit }) {
      axios
        .get("https://eco-country-api.herokuapp.com/ecos")
        .then((res) => commit("setCountries", res.data));
    },
  },
});
