<template>
  <b-container class="shop">
    <h2 class="text-center" v-if="myShop">{{ myShop.name }}</h2>
    <AddProduct />
    <h3 class="my-3">Products</h3>
    <b-row v-if="myShop">
      <b-col v-for="product in myShop.products" :key="product.id" cols="4">
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

          <b-btn
            @click="$bvModal.show('bv-modal-' + product.id)"
            variant="warning"
            >Edit Product</b-btn
          >
          <b-btn @click="deleteProduct(product.id)" variant="danger"
            >Delete Product</b-btn
          >
          <edit-product :product="product" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import axios from "axios";
import { mapState } from "vuex";
import AddProduct from "@/components/AddProduct.vue";
import EditProduct from "@/components/EditProduct.vue";
export default {
  name: "Shop",
  components: {
    AddProduct,
    EditProduct,
  },
  computed: {
    ...mapState(["myShop"]),
  },
  methods: {
    deleteProduct: function (product_id) {
      this.$store.dispatch("deleteProduct", product_id);
    },
  },
  mounted() {
    this.$store.dispatch("getMyShop");
    // console.log(this.myShop);
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
