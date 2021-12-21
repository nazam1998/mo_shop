<template>
  <div class="shop">
    <h2 class="text-center">{{ shopMG.name }}</h2>

    <h3 class="my-3">Products</h3>

    <b-row>
      <b-col
        v-for="product in shopMG.products"
        :key="product.id"
        cols="4"
        class="my-3"
      >
        <b-card
          :title="product.name"
          :sub-title="product.price + '€'"
          :img-src="'https://api-moshop.molengeek.pro' + product.cover_path"
          :img-alt="product.name"
          img-top
          tag="article"
          style="height: 100%"
          class="mb-2 p-3"
        >
          <b-card-text>
            {{ product.description.substring(0, 8) + "..." }}
          </b-card-text>

          <b-button href="#" variant="primary" class="btn-cart mt-auto"
            >Add to cart</b-button
          >
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Shop",
  computed: {
    ...mapState(["shops"]),
    ...mapGetters(["shopMG"]),
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-cart {
  position: relative;
  bottom: 0px;
}
</style>
