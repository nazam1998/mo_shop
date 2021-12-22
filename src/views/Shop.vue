<template>
  <b-container class="shop my-5" v-if="shop">
    <h2 class="text-center">{{ shop.name }}</h2>

    <h3 class="my-5 text-center">Products</h3>

    <b-row>
      <product
        v-for="product in shop.products"
        :key="product.id"
        :product="product"
      />
    </b-row>
  </b-container>
</template>

<script>
import Product from "@/components/Product.vue";
import axios from "axios";
export default {
  name: "Shop",
  components: {
    Product,
  },
  props: {
    shopid: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      shop: null,
    };
  },
  mounted() {
    axios
      .get("https://api-moshop.molengeek.pro/api/v1/shop/" + this.shopid, {
        headers: {
          Authorization: "Bearer " + this.$store.state.auth_token,
        },
      })
      .then((resp) => {
        this.shop = resp.data.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-cart {
  position: relative;
  bottom: 0px;
}
</style>
