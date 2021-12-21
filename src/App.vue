<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home | </router-link>
      <router-link v-if="!auth_token" to="/login">Login | </router-link>
      <router-link v-else to="/profil">My Profil | </router-link>
      <router-link v-if="auth_token" to="/myshop">My Shop | </router-link>
      <router-link v-if="auth_token" to="/mycart">Panier | </router-link>
      <router-link v-if="auth_token" to="/myorders">My Orders | </router-link>
      <router-link v-if="!auth_token" to="/register">Register</router-link>
      <button
        v-else
        @click="
          $store.commit('logout');
          $router.push('/');"
      >
        Log out
      </button>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["currentUser", "auth_token"]),
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a,
#nav button {
  font-weight: bold;
  color: #2c3e50;
}

#nav button {
  border: none;
  background-color: white !important;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
