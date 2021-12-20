<template>
  <div class="home">
    <b-container>
      <Shop />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Shop from "@/components/Shop.vue";
export default {
  name: "Home",
  components: {
    Shop,
  },
  mounted(){
    this.$store.dispatch('getShops')
  },
  computed: {},
};
</script>
