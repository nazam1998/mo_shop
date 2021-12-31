<template>
  <b-container v-if="product">
    <h3
      v-if="message"
      class="text-center my-5"
      :class="{
        'text-success': message.status == 200,
        'text-danger': message.status != 200,
      }"
    >
      {{ message.message }}
    </h3>
    <b-row class="align-items">
      <b-col cols="6">
        <img
          class="img-fluid"
          :src="'https://api-moshop.molengeek.pro' + product.cover_path"
          alt=""
        />
      </b-col>
      <b-col cols="6" class="product-desc">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <div class="add-cart-section">
          <h5>{{ product.price }}€</h5>
          <b-form-input
            class="w-50 mb-0"
            id="input-1"
            v-model="currentQuantity"
            type="number"
            trim
            min="1"
          ></b-form-input>
          <b-button
            href="#"
            variant="primary"
            class="btn-cart my-2"
            @click="addCart"
            >Add to cart</b-button
          >
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentQuantity: 1,
      product: null,
      message: null,
    };
  },
  props: {
    productid: {
      type: [Number, String],
      required: true,
    },
  },
  mounted() {
    axios
      .get(
        "https://api-moshop.molengeek.pro/api/v1/product/" + this.productid,
        {
          headers: {
            Authorization: "Bearer " + this.auth_token,
          },
        }
      )
      .then((resp) => {
        this.product = resp.data.data;
      });
  },
  methods: {
    addCart: function () {
      let formData = new FormData();
      formData.append("product", this.product.id);
      formData.append("quantity", this.currentQuantity);
      this.$store.dispatch("addToCart", formData);
    },
  },
  watch: {
    currentQuantity: function (value) {
      if (value >= 1) {
        this.message = "";
        this.price = value;
      } else {
        this.message = "You must enter at least one quantity";
      }
    },
  },
  computed: {
    ...mapState(["auth_token"]),
  },
};
</script>
<style scoped>
.product-desc {
  position: relative;
}
.add-cart-section {
  position: absolute;
  bottom: 0;
  text-align: left;
}
</style>