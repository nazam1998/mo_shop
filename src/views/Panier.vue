<template>
  <b-container>
    <h2>{{ fullname }}'s Cart</h2>
    <b-btn variant="success" @click="confirm">Confirm Order</b-btn>
    <b-row>
      <b-row v-if="myCart">
        <b-col
          v-for="product in myCart"
          :key="product.id"
          cols="4"
          class="my-3"
        >
          <b-card
            :title="product.product.name"
            :sub-title="product.product.price + '€'"
            :img-src="
              'https://api-moshop.molengeek.pro' + product.product.cover_path
            "
            :img-alt="product.product.name"
            img-top
            tag="article"
            style="height: 100%; width: 400px"
            class="mb-2 p-3"
          >
            <b-card-text>
              {{ product.product.description.substring(0, 8) + "..." }}
            </b-card-text>
            <b-card-text> Quantity: {{ product.quantity }} </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-row>
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
    ...mapState(["myCart", "currentUser"]),
  },
};
</script>
<style scoped>
</style>