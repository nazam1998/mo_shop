<template>
  <b-container class="shop">
    <h2 class="text-center" v-if="myShop">{{ myShop.name }}</h2>
    <AddProduct />
    <h3 class="my-3">Products</h3>
    <b-row v-if="myShop">
      <b-col v-for="product in myShop.products" :key="product.id" cols="4">
        <div class="product-action">
          <b-btn
            @click="$bvModal.show('bv-modal-' + product.id)"
            class="my-2 mr-2"
            variant="warning"
            ><font-awesome-icon icon="pen"
          /></b-btn>
          <b-btn @click="deleteProduct(product.id)" variant="danger"
            ><font-awesome-icon icon="trash"
          /></b-btn>
        </div>
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
            {{ product.description.substring(0, 50) + "..." }}
          </b-card-text>

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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-cart {
  position: relative;
  bottom: 0px;
}
.product-action {
  position: absolute;
  top: 0px;
  z-index: 20;
  right: 50px;
}
</style>
