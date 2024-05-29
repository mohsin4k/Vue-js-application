<template>
  <main>
    <div class="container">
      <h1>Sign Up</h1>

      <label for="name"><b>Name</b></label>
      <input
        v-model="name"
        type="text"
        placeholder="Enter Name"
        name="name"
        required
      />

      <label for="email"><b>Email</b></label>
      <input
        v-model="email"
        type="text"
        placeholder="Enter Email"
        name="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        v-model="password"
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button @click="register" type="submit">Signup</button>
      <button @click="redirectToLogin" type="submit">Login</button>
      <!-- <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label> -->
    </div>
  </main>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService.js";

export default {
  name: "UserSignup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.signup({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(response);
      if (response) {
        this.$router.push({ name: "Login" });
      }
    },

    redirectToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  display: flex;
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: flex;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px; /* Optional: Fixed width for the container */
  justify-content: center;
  align-items: center;
}
body {
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0; Optional: Adds a background color for better visibility */
}
</style>
