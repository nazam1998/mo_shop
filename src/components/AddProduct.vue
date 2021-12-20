<template>
  <div>
    <b-btn v-b-modal.modal-1 variant="primary">Add Product</b-btn>

    <b-modal id="modal-1" title="BootstrapVue" ok-only >
      <p class="my-4">Add a new Product</p>
      <b-form-group
        id="fieldset-1"
        label="Enter your First Name"
        label-for="input-1"
        valid-feedback="Thank you!"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="nameValue"
          trim
        ></b-form-input>
        <b-form-invalid-feedback v-if="msg.includes('name')">
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
          v-model="descValue"
          trim
        ></b-form-input>
        <b-form-invalid-feedback v-if="msg.includes('desc')">
          Last Name is invalid
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
          type="number"
          v-model="price"
          trim
        ></b-form-input>
        <b-form-invalid-feedback v-if="msg.includes('price')">
          Last Name is invalid
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-file v-model="cover" class="my-3"></b-form-file>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "AddProduct",
  data() {
    return {
      nameValue: null,
      descValue: null,
      price: 0,
      cover: null,
      msg: [],
    };
  },
};
</script>
<style>
</style>