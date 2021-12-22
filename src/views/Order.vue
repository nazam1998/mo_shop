<template>
  <b-container v-if="order">
    <h3>Your order on {{ orderDate }}</h3>
    <b-row class="my-5 justify-content-between text-left">
      <b-col cols="1">ID</b-col>
      <b-col cols="1"></b-col>
      <b-col cols="4">Product</b-col>
      <b-col cols="1">Quantity</b-col>
      <b-col cols="2">Unit Price</b-col>
      <b-col cols="2">Total Price</b-col>
    </b-row>
    <b-row
      class="my-5 justify-content-between text-left align-items-center"
      tag="li"
      v-for="item in order_items"
      :key="item.id"
    >
      <b-col cols="1" class="border-right">{{ item.id }}</b-col>
      <b-col cols="1"
        ><img
          class="img-fluid"
          :src="'https://api-moshop.molengeek.pro' + item.product.cover_path"
          alt=""
      /></b-col>
      <b-col cols="4" class="border-right">{{ item.product.name }}</b-col>
      <b-col cols="1" class="border-right">{{ item.quantity }}</b-col>
      <b-col cols="2" class="border-right">{{ item.product.price }}€</b-col>
      <b-col cols="2"
        >{{ (item.product.price * item.quantity).toFixed(2) }}€</b-col
      >
    </b-row>
    <h3>Total Price: {{ order.price }}</h3>
  </b-container>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Order",
  data() {
    return {
      order: null,
      order_items: null,
    };
  },
  props: {
    orderid: {
      type: [String, Number],
      required: true,
    },
  },
  mounted() {
    let auth_token = this.auth_token;
    axios
      .get("https://api-moshop.molengeek.pro/api/v1/order/" + this.orderid, {
        headers: {
          Authorization: "Bearer " + auth_token,
        },
      })
      .then((resp) => {
        this.order = resp.data.data.order;
        this.order_items = resp.data.data.order_items;
      });
  },
  computed: {
    orderDate: function () {
      let formatdate = new Date(this.order.date);
      let year = formatdate.getFullYear();
      let month = formatdate.getMonth();
      let day = formatdate.getDate();
      let hour = formatdate.getHours();
      let minutes = formatdate.getMinutes();
      let seconds = formatdate.getSeconds();
      return (
        day +
        "/" +
        month +
        "/" +
        year +
        " " +
        hour +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    ...mapState(["auth_token"]),
  },
};
</script>
<style scoped>
</style>