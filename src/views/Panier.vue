<template>
  <b-container v-if="myCart">
    <h2>{{ fullname }}'s Cart</h2>
      <b-row class="justify-content-between mt-5">
        <b-col cols="3"></b-col>
        <b-col cols="3">Product Name</b-col>
        <b-col cols="1">Quantity</b-col>
        <b-col cols="1">Unit Price</b-col>
        <b-col cols="1">Total Price</b-col>
      </b-row>
      <ul>
        <b-row
          tag="li"
          v-for="item in myCart"
          :key="item.id"
          class="align-items-center p-2 justify-content-between"
        >
          <b-col cols="3"
            ><img
              class="img-fluid"
              :src="
                'https://api-moshop.molengeek.pro' + item.product.cover_path
              "
              alt=""
          /></b-col>
          <b-col cols="3">{{ item.product.name }}</b-col>
          <b-col cols="1">{{ item.quantity }}</b-col>
          <b-col cols="1">{{ item.product.price }}€</b-col>
          <b-col cols="1"
            >{{ (item.product.price * item.quantity).toFixed(2) }}€</b-col
          >
        </b-row>
      </ul>
      <div class="mx-auto text-center">
        <h3>Total Price: {{ totalPrice }}€</h3>
        <b-btn
          variant="success"
          class="mx-auto"
          v-if="myCart.length != 0"
          @click="confirm"
          >Confirm Order</b-btn
        >
      </div>

  </b-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Panier",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getMyCart");
  },
  methods: {
    confirm() {
      this.$store.dispatch("confirmOrder");
    },
  },
  computed: {
    fullname: function () {
      return (
        this.currentUser.profile.lastname +
        " " +
        this.currentUser.profile.firstname
      );
    },

    totalPrice: function () {
      let totalPrice = 0;
      this.myCart.forEach((elem) => {
        totalPrice += elem.product.price * elem.quantity;
      });
      return totalPrice;
    },
    ...mapState(["myCart", "currentUser"]),
  },
};
</script>
<style scoped>
ul li {
  border: 1px solid grey;
}
</style>