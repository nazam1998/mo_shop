<template>
  <div>
    <b-btn v-b-modal.modal-1 variant="primary">Add Product</b-btn>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Add a new Product</p>
      <b-form-group
        id="fieldset-1"
        label="Enter product name"
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
          Product Name is invalid
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="fieldset-1"
        label="Description"
        label-for="input-1"
        valid-feedback="Thank you!"
      >
        <b-form-textarea
          id="textarea"
          v-model="descValue"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-form-invalid-feedback v-if="msg.includes('desc')">
          Last Name is invalid
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="fieldset-1"
        label="Product Price"
        label-for="input-1"
        valid-feedback="Thank you!"
      >
        <b-form-input
          id="input-1"
          type="number"
          v-model="price"
          trim
          min="0"
        ></b-form-input>
        <b-form-invalid-feedback v-if="msg.includes('price')">
          Last Name is invalid
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-file v-model="cover" class="my-3"></b-form-file>
      <template #modal-footer>
        <b-button size="sm" variant="success" @click="addProduct()">
          Add Product
        </b-button>
      </template>
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
  watch: {
    price: function (value) {
      if (value >= 0) {
        this.price = value;
      }
    },
  },
  methods: {
    addProduct: function () {
      let formData = new FormData();
      formData.append("name", this.nameValue);
      formData.append("description", this.descValue);
      formData.append("price", this.price);
      formData.append("cover", this.cover);
      console.log(formData);
      this.$store.dispatch("addProduct", formData);
      this.nameValue = null;
      this.descValue = null;
      this.cover = null;
      this.price = null;
      this.$bvModal.hide('modal-1')
    },
  },
};
</script>
<style>
</style>