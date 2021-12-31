import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shops: null,
    currentUser: null,
    auth_token: null,
    message: null,
    myShop: null,
    myCart: null,
    orders: null,
  },
  mutations: {
    setShops: function (state, value) {
      state.shops = value;
    },
    setOrders: function (state, value) {
      state.orders = value.data;
    },
    setToken: function (state, value) {
      state.auth_token = value
    },
    setCurrentUser: function (state, value) {
      state.currentUser = value.data;
    },
    setMyShop: function (state, value) {
      state.myShop = value.data;
    },
    setMyCart: function (state, value) {
      state.myCart = value.data;
    },
    logout: function (state) {
      state.auth_token = null;
      state.currentUser = null;
    },
    setMessage: function (state, value) {
      state.message = value
    },
    emptyCart: function (state) {
      state.myCart = null
    }
  },
  getters: {
    shops: function (state) {
      return state.shops.data
    }
  },
  actions: {
    getShops: function ({
      commit,
      state
    }) {
      axios
        .get("https://api-moshop.molengeek.pro/api/v1/shops", {
          headers: {
            Authorization: "Bearer " + state.auth_token
          }
        })
        .then((resp) => {
          commit('setShops', resp.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOrders: function ({
      commit,
      state
    }) {
      axios
        .get("https://api-moshop.molengeek.pro/api/v1/orders", {
          headers: {
            Authorization: "Bearer " + state.auth_token
          }
        })
        .then((resp) => {
          commit('setOrders', resp.data);
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
        dispatch('getUser');
        dispatch('getMyShop');
        dispatch('getMyCart');

        router.push({
          name: "Home"
        });

      }).catch((err) => {
        console.log(err);
      });
    },
    editPicture: function ({
      state,
      dispatch
    }, value) {
      axios.put('https://api-moshop.molengeek.pro/api/v1/user/picture', value, {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((rep) => {
        state.message = rep.message
        dispatch('getUser');
      })
    },
    editProfile: function ({
      state,
      dispatch
    }, value) {
      axios.put('https://api-moshop.molengeek.pro/api/v1/user', value, {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((rep) => {

        state.message = rep.message
        dispatch('getUser');
      })
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
        commit('setCurrentUser', response.data)
      });
    },
    addToCart({
      state,
      dispatch
    }, value) {
      axios.post('https://api-moshop.molengeek.pro/api/v1/cart', value, {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((

      ) => {
        dispatch('getMyShop')
      })
    },
    confirmOrder: function ({
      dispatch,
      commit,
      state
    }) {
      axios.post('https://api-moshop.molengeek.pro/api/v1/buy', {}, {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then(() => {
        dispatch('getMyCart');
        commit('emptyCart')
      }).catch((err) => {
        console.log(err);
      });
    },
    addProduct({
      state,
      dispatch
    }, value) {
      axios.post('https://api-moshop.molengeek.pro/api/v1/product', value, {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((

      ) => {
        dispatch('getMyShop')
      })
    },
    editProduct({
      state,
      dispatch
    }, value) {
      let data = value[0];
      let product_id = value[1];
      axios.put('https://api-moshop.molengeek.pro/api/v1/product/' + product_id, data, {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((

      ) => {
        dispatch('getMyShop')
      })
    },
    editProductPicture({
      state,
      dispatch
    }, value) {
      let data = value[0];
      let product_id = value[1];
      axios.put('https://api-moshop.molengeek.pro/api/v1/product/' + product_id + '/picture', data, {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((

      ) => {
        dispatch('getMyShop')
      })
    },
    deleteProduct({
      state,
      dispatch
    }, value) {

      axios.delete('https://api-moshop.molengeek.pro/api/v1/product/' + value, {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((

      ) => {
        dispatch('getMyShop')
      })
    },
    async getMyShop({
      commit,
      state
    }) {
      await axios.get('https://api-moshop.molengeek.pro/api/v1/shop', {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((response) => {
        commit('setMyShop', response.data)
      });
    },
    async getMyCart({
      commit,
      state
    }) {
      await axios.get('https://api-moshop.molengeek.pro/api/v1/cart', {
        headers: {
          Authorization: "Bearer " + state.auth_token
        }
      }).then((response) => {
        commit('setMyCart', response.data)
      });
    },
  },
  modules: {

  },
  plugins: [createPersistedState({
    paths: ['currentUser', 'auth_token'],
  })],
})