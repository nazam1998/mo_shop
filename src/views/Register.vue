<template>
  <b-container class="text-left border p-4">
    <b-form-group
      id="fieldset-1"
      label="Enter your First Name"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input
        id="input-1"
        type="text"
        v-model="firstNameValue"
        trim
      ></b-form-input>
      <b-form-invalid-feedback v-if="msg.includes('firstName')">
        First Name is invalid
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label="Enter your Last Name"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input
        id="input-1"
        type="text"
        v-model="lastNameValue"
        trim
      ></b-form-input>
      <b-form-invalid-feedback v-if="msg.includes('lastName')">
        Last Name is invalid
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label="Enter your Email"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input
        id="input-1"
        type="email"
        v-model="emailValue"
        trim
      ></b-form-input>
      <b-form-invalid-feedback v-if="msg.includes('email')">
        Email is not valid
      </b-form-invalid-feedback>
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
      <b-form-invalid-feedback v-if="msg.includes('password')">
        Password is not valid
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-file v-model="file" class="my-3"></b-form-file>
    <b-button @click="register">Register</b-button>
  </b-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      firstNameValue: null,
      lastNameValue: null,
      emailValue: null,
      passwordValue: null,
      file: null,
      msg: [],
    };
  },
  watch: {
    firstNameValue: function (value) {
      if (!value) {
        if (!this.msg.includes("firstName")) {
          this.msg.push("firstName");
        }
      } else {
        this.msg.splice(this.msg.indexOf("firstName"), 1);
      }
    },
    lastNameValue: function (value) {
      if (!value) {
        if (!this.msg.includes("lastName")) {
          this.msg.push("lastName");
        }
      } else {
        this.msg.splice(this.msg.indexOf("lastName"), 1);
      }
    },
    emailValue: function (value) {
      if (!value || !value.includes("@")) {
        if (!this.msg.includes("email")) {
          this.msg.push("email");
        }
        console.log(this.msg);
      } else {
        this.msg.splice(this.msg.indexOf("email"), 1);
      }
    },
    passwordValue: function (value) {
      if (!value || value.length < 4) {
        if (!this.msg.includes("password")) {
          this.msg.push("password");
        }
      } else {
        this.msg.splice(this.msg.indexOf("password"), 1);
      }
    },
    file: function (value) {
      if (
        !value ||
        value.size > 2048 * 2048 ||
        value.type !== "image/jpeg" ||
        value.type !== "image/jpg" ||
        value.type !== "image/png"
      ) {
        if (!this.msg.includes("file")) {
          this.msg.push("file");
        }
      } else {
        this.msg.splice(this.msg.indexOf("file"), 1);
      }
    },
  },
  methods: {
    register: function () {
      const formData = new FormData();
      formData.append("firstname", this.firstNameValue);
      formData.append("lastname", this.lastNameValue);
      formData.append("email", this.emailValue);
      formData.append("password", this.passwordValue);
      formData.append("picture", this.file);

      axios
        .post("https://api-moshop.molengeek.pro/api/v1/register", formData)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
</style>