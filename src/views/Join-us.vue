<template>
  <div class="contact">
    <div class="form">
      <h1>Join Us</h1>
      <br />

      <form>
        <div class="form-row">
          <div class="col">
            <label for="exampleFormControlTextarea1">First name</label>
            <input
              v-model="firstName"
              type="text"
              class="form-control"
              placeholder="First name"
            />
          </div>
          <div class="col">
            <label for="exampleFormControlTextarea1">Last name</label>
            <input
              v-model="lastName"
              type="text"
              class="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <br />
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label for="input-with-list">Available Jobs</label>
          <b-form-input list="input-list" id="input-with-list"></b-form-input>
          <b-form-datalist id="input-list" :options="options">
          </b-form-datalist>
        </div>
        <br />

        <!-- Plain mode -->
        <b-form-file v-model="file2" class="mt-3" outline-dark></b-form-file>

        <dl></dl>
        <div class="form-group">
          <label for="exampleFormControlTextarea1"
            >Tell us a little about yourself</label
          >
          <textarea
            v-model="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <dl></dl>
          <br />
          <b-button
            @click="showDismissibleAlert = true"
            type="submit"
            variant="outline-dark"
          >
            Submit your application
          </b-button>
          <dl></dl>
          <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
            Thanks for your application!
          </b-alert>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDismissibleAlert: false,
      firstName: "",
      lastName: "",
      email: "",
      text: "",
      options: ["Product Designer", "3D designer", "Web Developer"],
      file2: null,
    };
  },
  methods: {
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
<style lang="scss">
.contact {
  padding-top: 70px;
  background-color: white;
}

@media screen and (max-width: 759px) {
  .form {
    padding-left: 10%;
    padding-right: 10%;
  }
}
@media screen and (min-width: 759px) {
  .form {
    background-color: white;
    padding-bottom: 50px;
    margin-top: 30px;
    padding: 25px;
    margin-left: 30%;
    margin-right: 30%;
    border-radius: 3%;
    margin-bottom: 30px;
  }
}
</style>
