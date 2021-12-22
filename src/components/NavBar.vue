<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-5">
    <b-navbar-brand
      ><router-link class="text-white" to="/"
        >MoShop</router-link
      ></b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          ><router-link class="text-white" v-if="auth_token" to="/myshop"
            >My Shop</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link class="text-white" v-if="auth_token" to="/mycart"
            >Cart</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link class="text-white" v-if="auth_token" to="/myorders"
            >My Orders</router-link
          ></b-nav-item
        >
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          ><router-link class="text-white" v-if="!auth_token" to="/login"
            >Login</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link class="text-white" v-if="!auth_token" to="/register"
            >Register</router-link
          ></b-nav-item
        >
        <b-nav-item-dropdown right v-if="auth_token">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ currentUser.profile.firstname }}</em>
          </template>
          <b-dropdown-item
            ><router-link class="text-dark" v-if="auth_token" to="/profil"
              >My Profil</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            @click="
              $store.commit('logout');
              $router.push('/');"
            >Log Out</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapState(["currentUser", "auth_token"]),
  },
};
</script>
<style scoped>
a.nav-link {
  color: white;
}
</style>