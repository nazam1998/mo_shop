import Vue from 'vue'
import Vuex from 'vuex';
import shop from '@/shop.json'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shops: shop,
    currentUser: null,
    auth_token: null,
    message: null
  },
  mutations: {
    setShops: function (state, value) {
      state.shops = value;
    },
    setToken: function (state, value) {
      state.auth_token = value
    },
    setCurrentUser: function (state, value) {
      state.currentUser = value;
    },
    logout: function (state) {
      state.auth_token = null;
      state.currentUser = null;
    }
  },
  getters: {
    shopMG: function (state) {
      return state.shops.data
    }
  },
  actions: {
    getShops: function ({
      commit
    }) {
      axios
        .get("https://api-moshop.molengeek.pro/api/v1/mg/shop")
        .then((resp) => {
          commit('setShops', resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login: function ({
      commit,
      dispatch
    }, value) {
      axios.post('https://api-moshop.molengeek.pro/api/v1/login', value).then((resp) => {
        commit('setToken', resp.data.data.token);
        console.log(resp.data.data.token);
        dispatch('getUser');
      }).catch((err) => {
        console.log(err);
      });
    },
    async getUser({
      commit,
      state
    }) {
      await axios.get('https://api-moshop.molengeek.pro/api/v1/user', {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((response) => {
        console.log(response.data);
        commit('setCurrentUser', response.data)
      });
    }
  },
  modules: {

  }
})