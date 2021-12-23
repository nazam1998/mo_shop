<template>
  <b-container class="text-left border p-4">
    <b-form-group
      id="fieldset-1"
      label="Enter your Email"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input id="input-1" v-model="emailValue" trim></b-form-input>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label="Enter your Password"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input
        type="password"
        id="input-1"
        v-model="passwordValue"
        trim
      ></b-form-input>
    </b-form-group>
    <b-button @click="login">Login</b-button>
  </b-container>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      emailValue: null,
      passwordValue: null,
    };
  },
  methods: {
    login: function () {
      let data = {
        email: this.emailValue,
        password: this.passwordValue,
      };

      this.$store.dispatch("login", data);
    },
  },
};
</script>
<style scoped>
</style>