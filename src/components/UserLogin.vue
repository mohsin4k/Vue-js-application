<template>
  <main>
    <div class="custom-css">
      <h1>LogIn</h1>
    </div>
    <div class="d-flex justify-content-center">
      <b-form @submit.prevent="login">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <div class="custom-class">
          <b-button type="submit" variant="primary" class="mb-2"
            >Submit</b-button
          >
          <b-button type="submit" variant="primary" @click="redirectToSignup"
            >SignUp</b-button
          >
        </div>
      </b-form>
    </div>
  </main>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService.js";
import Api from "../services/Api.js";

export default {
  name: "UserSignup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password,
      });
      if (response) {
        const token = response.data.token;

        localStorage.setItem("authToken", token);
        this.$router.push({ name: "Product" });

        Api().defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    },
    redirectToSignup() {
      this.$router.push({ name: "Signup" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-css {
  align-items: center;
  width: 50%;
  justify-content: center;
  padding-left: 45%;
}

.custom-class {
  padding-left: 28%;
}
</style>
