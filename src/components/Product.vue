<template lang="">
    <b-col
        
        cols="4"
        class="my-3"
      >
        <b-card
          :title="product.name"
          :sub-title="product.price + '€'"
          :img-src="'https://api-moshop.molengeek.pro' + product.cover_path"
          :img-alt="product.name"
          img-top
          img-width="100%"
          img-height="265px"
          tag="article"
          style="height: 100%"
          class="mb-2 p-3 card-product"
        >
          <b-card-text>
            {{ product.description.substring(0, 50) + "..." }}
          </b-card-text>
          <b-row>

          <b-form-input class="w-50" id="input-1" v-model="currentQuantity" type="number" trim></b-form-input>
          <b-button href="#" variant="primary" class="btn-cart mt-auto mx-2" @click="addCart"
            >Add to cart</b-button
          >
          </b-row>
        </b-card>
      </b-col>
</template>
<script>
export default {
  name: "Product",
  data() {
    return {
      currentQuantity: 1,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addCart: function () {
      console.log(this.currentQuantity);
      let formData = new FormData();
      formData.append("product", this.product.id);
      formData.append("quantity", this.currentQuantity);
      this.$store.dispatch("addToCart", formData);
    },
  },
  watch: {
    currentQuantity: function (value) {
      if (value >= 1) {
        this.price = value;
      }
    },
  },
};
</script>
<style scoped>
</style>