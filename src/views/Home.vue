<template>
  <div class="home">
    <b-container v-if="shops" class="my-5">
      <b-row>
        <li class="col-5" v-for="shop in shops" :key="shop.id">
          <router-link
            class="text-dark"
            :to="{ name: 'Shop', params: { shopid: shop.id } }"
            >{{ shop.name }}</router-link
          >
        </li>
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