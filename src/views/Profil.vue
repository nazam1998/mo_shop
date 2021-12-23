<template>
  <b-container>
    <h3 class="my-4">My Profil</h3>
    <b-row class="align-items-center">
      <b-col cols="6"
        ><img class="img-fluid img-profile" :src="profilPicture" />
        <div class="my-2"></div>

        <b-form-file
          class="my-3"
          v-model="file"
          v-if="editPicture && !editMode"
        ></b-form-file>
        <b-btn
          @click="savePicture"
          variant="success"
          v-if="editPicture && !editMode"
          >Save Picture</b-btn
        ></b-col
      >
      <b-col offset="1" cols="5" class="text-left">
        <p>
          <span class="font-weight-bold">First Name:</span>
          {{ currentUser.profile.firstname }}
        </p>
        <p>
          <span class="font-weight-bold">First Name:</span>
          {{ currentUser.profile.lastname }}
        </p>
        <p>
          <span class="font-weight-bold">Email:</span> {{ currentUser.email }}
        </p>

        <b-form-group
          v-if="editMode && !editPicture"
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
          v-if="editMode && !editPicture"
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
        <b-btn
          @click="saveProfile"
          v-if="editMode && !editPicture"
          variant="success"
          >Save Profile</b-btn
        ></b-col
      >
    </b-row>
    <b-row>
      <b-col cols="6"
        ><b-btn
          @click="editPicture = !editPicture"
          v-if="!editMode"
          class="my-3"
          variant="info"
          >{{ editPicture ? "Cancel" : "Edit Picture" }}</b-btn
        ></b-col
      >
      <b-col cols="6"
        ><b-btn
          @click="editMode = !editMode"
          v-if="!editPicture"
          class="my-3"
          variant="danger"
          >{{ editMode ? "Cancel" : "Edit Profil" }}</b-btn
        ></b-col
      >
    </b-row>
  </b-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Profil",
  data() {
    return {
      firstNameValue: null,
      lastNameValue: null,
      file: null,
      editMode: false,
      editPicture: false,
      msg: [],
    };
  },
  mounted() {
    this.firstNameValue = this.currentUser.profile.firstname;
    this.lastNameValue = this.currentUser.profile.lastname;
  },
  methods: {
    savePicture: function () {
      if (this.file) {
        let formData = new FormData();
        formData.append("picture", this.file);
        this.$store.dispatch("editPicture", formData);
      }
    },
    saveProfile: function () {
      if (this.firstNameValue && this.lastNameValue) {
        let formData = new FormData();
        formData.append("firstname", this.firstNameValue);
        formData.append("lastname", this.lastNameValue);
        this.$store.dispatch("editProfile", formData);
        this.editMode = !this.editMode
      }
    },
  },
  computed: {
    fullname: function () {
      return (
        this.currentUser.profile.firstname +
        " " +
        this.currentUser.profile.lastname
      );
    },
    profilPicture: function () {
      return (
        "https://api-moshop.molengeek.pro" +
        this.currentUser.profile.picture_path
      );
    },
    ...mapState(["currentUser"]),
  },
};
</script>
<style scoped>
.img-profile {
  height: 400px;
  width: 400px;
}
</style>