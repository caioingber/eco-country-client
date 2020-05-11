import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    loading: true,
    sortBy: "name",
    order: "asc",
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
      state.loading = false;
    },
    setSortBy(state, sortBy) {
      state.sortBy = sortBy;
    },
    setOrder(state, order) {
      state.order = order;
    },
  },
  actions: {
    loadCountries({ commit, state, dispatch }) {
      let url = "";
      if (process.env.NODE_ENV === "production") {
        url = "https://eco-country-api.herokuapp.com/ecos";
      }
      if (process.env.NODE_ENV === "development") {
        url = "http://localhost:8000/ecos";
      }
      axios.get(url).then((res) => {
        commit("setCountries", res.data);
        dispatch("orderCountries", {
          filter: state.sortBy,
          direction: state.order,
        });
      });
    },
    updateSortBy({ commit, state, dispatch }, data) {
      commit("setSortBy", data);
      dispatch("orderCountries", {
        filter: state.sortBy,
        direction: state.order,
      });
    },
    updateOrder({ commit, state, dispatch }, data) {
      commit("setOrder", data);
      dispatch("orderCountries", {
        filter: state.sortBy,
        direction: state.order,
      });
    },
    orderCountries({ commit, state }, data) {
      let countries = state.countries;

      switch (data.filter) {
        case "name":
          countries.sort((a, b) => {
            if (data.direction == "asc") {
              return a.country.name == b.country.name
                ? 0
                : a.country.name > b.country.name
                ? 1
                : -1;
            }
            if (data.direction == "desc") {
              return a.country.name == b.country.name
                ? 0
                : a.country.name < b.country.name
                ? 1
                : -1;
            }
          });
          break;
        case "gini":
          countries.sort((a, b) => {
            if (data.direction == "asc") {
              return a.country.gini == b.country.gini
                ? 0
                : a.country.gini > b.country.gini
                ? 1
                : -1;
            }
            if (data.direction == "desc") {
              return a.country.gini == b.country.gini
                ? 0
                : a.country.gini < b.country.gini
                ? 1
                : -1;
            }
          });
          break;
        case "reserve":
          countries.sort((a, b) => {
            if (data.direction == "asc") {
              return a.biocapacityReserve == b.biocapacityReserve
                ? 0
                : a.biocapacityReserve > b.biocapacityReserve
                ? 1
                : -1;
            }
            if (data.direction == "desc") {
              return a.biocapacityReserve == b.biocapacityReserve
                ? 0
                : a.biocapacityReserve < b.biocapacityReserve
                ? 1
                : -1;
            }
          });
          break;
        case "gdp":
          countries.sort((a, b) => {
            let gdpA = a.gdpPerCapita;
            if (gdpA) {
              gdpA = parseFloat(
                gdpA
                  .substring(1)
                  .split(",")
                  .join("")
              );
            }
            let gdpB = b.gdpPerCapita;
            if (gdpB) {
              gdpB = parseFloat(
                gdpB
                  .substring(1)
                  .split(",")
                  .join("")
              );
            }
            if (data.direction == "asc") {
              return gdpA == gdpB ? 0 : gdpA > gdpB ? 1 : -1;
            }
            if (data.direction == "desc") {
              return gdpA == gdpB ? 0 : gdpA < gdpB ? 1 : -1;
            }
          });
          break;
      }
      commit("setCountries", countries);
    },
  },
  getters: {
    getSortBy(state) {
      return state.sortBy;
    },
    getOrder(state) {
      return state.order;
    },
  },
});
