<template>
  <div class="shop">
    <h2 class="text-center">{{ shopMG.name }}</h2>

    <h3 class="my-3">Products</h3>

    <b-row>
      <product
        v-for="product in shopMG.products"
        :key="product.id"
        :product="product"
      />
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Product from "@/components/Product.vue";
export default {
  name: "Shop",
  components: {
    Product,
  },
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
