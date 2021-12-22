<template>
  <b-container>
    <b-row class="my-5 justify-content-between text-left">
      <b-col cols="1">ID</b-col>
      <b-col cols="6">Date</b-col>
      <b-col cols="3">Price</b-col>
      <b-col cols="2">Action</b-col>
    </b-row>
    <ul>
      <b-row
        class="my-5 justify-content-between text-left"
        tag="li"
        v-for="order in orders"
        :key="order.id"
      >
        <b-col cols="1">{{ order.id }}</b-col>
        <b-col cols="6">{{ new Date(order.date).toString() }}</b-col>
        <b-col cols="3">{{ order.price }}</b-col>
        <b-col cols="2"
          ><router-link :to="{ name: 'Order', params: { orderid: order.id } }"
            ><b-btn>View Details</b-btn></router-link
          ></b-col
        >
      </b-row>
    </ul>
  </b-container>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "MyOrders",
  mounted() {
    this.$store.dispatch("getOrders");
  },
  computed: {
    ...mapState(["orders"]),
  },
};
</script>
<style>
</style>