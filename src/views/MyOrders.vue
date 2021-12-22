<template>
  <b-container>
    <b-row class="my-5 justify-content-between text-left">
      <b-col cols="1">ID</b-col>
      <b-col cols="6">Date</b-col>
      <b-col cols="3">Price</b-col>
      <b-col cols="2">Action</b-col>
    </b-row>
    <b-row
      class="justify-content-between text-left p-3"
      tag="li"
      v-for="order in orders"
      :key="order.id"
    >
      <b-col cols="1">{{ order.id }}</b-col>
      <b-col cols="6">{{ orderDate(order.date) }}</b-col>
      <b-col cols="3">{{ order.price }}</b-col>
      <b-col cols="2"
        ><router-link :to="{ name: 'Order', params: { orderid: order.id } }"
          ><b-btn>View Details</b-btn></router-link
        ></b-col
      >
    </b-row>
  </b-container>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "MyOrders",
  mounted() {
    this.$store.dispatch("getOrders");
  },
  methods: {
    orderDate: function (date) {
      let formatdate = new Date(date);
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
  },
  computed: {
    ...mapState(["orders"]),
  },
};
</script>
<style scoped>
li {
  border: 1px solid;
}
</style>