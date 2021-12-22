<template>
  <div class="home">
    <b-container v-if="shops" class="my-5">
      <b-row class="justify-content-between">
        <router-link class="col-5 border rounded m-2 p-2 text-dark text-center" v-for="shop in shops" :key="shop.id"
            :to="{ name: 'Shop', params: { shopid: shop.id } }"
            >{{ shop.name }}
        </router-link>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",

  mounted() {
    this.$store.dispatch("getShops");
  },
  computed: {
    ...mapState(["shops"]),
  },
};
</script>
<style scoped>
li {
  list-style: none;
}
</style>