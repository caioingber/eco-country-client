import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    filteredCountries: [],
    search: "",
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
    updateSearch(state, search) {
      state.search = search;
    },
  },
  actions: {
    loadCountries({ commit }) {
      axios
        .get("http://localhost:8000/ecos")
        .then((res) => commit("setCountries", res.data));
    },
  },
});
