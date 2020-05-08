import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    loading: true,
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
      state.loading = false;
    },
  },
  actions: {
    loadCountries({ commit }) {
      let url = "";
      if (process.env.NODE_ENV === "production") {
        url = "https://eco-country-api.herokuapp.com/ecos";
      }
      if (process.env.NODE_ENV === "development") {
        url = "http://localhost:8000/ecos";
      }
      axios.get(url).then((res) => commit("setCountries", res.data));
    },
  },
});
