<template>
  <div class="home">
    <h1 class="text-center">
      Molengeek Shop

      <h5 class="my-4">Select a shop and start buying products</h5>
    </h1>
    <b-container v-if="shops" class="my-5">
      <b-row class="justify-content-between">
        <router-link
          class="col-5 border rounded m-2 p-2 text-dark text-center"
          v-for="shop in shops"
          :key="shop.id"
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