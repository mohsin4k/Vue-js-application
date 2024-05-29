<template>
  <header class="header">
    <div class="container">
      <div class="logo" @click="redirectToHome">Home</div>
      <div class="buttons">
        <button v-if="wishlistButton" class="btn" @click="redirectToWishList">
          WishList
        </button>
        <button v-if="productsButton" class="btn" @click="redirectToProduct">
          Products
        </button>
        <button class="btn" @click="logout">Logout</button>
      </div>
    </div>
  </header>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService.js";

export default {
  name: "PageHeader",
  props: {
    wishlistButton: {
      type: Boolean,
      required: true,
    },
    productsButton: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    redirectToHome() {
      this.$router.push({ name: "Home" });
    },
    async logout() {
      await AuthenticationService.logout();
      localStorage.removeItem("authToken");
      this.$router.push("/login");
    },
    redirectToWishList() {
      this.$router.push({ name: "Wishlist" });
    },
    redirectToProduct() {
      this.$router.push({ name: "Product" });
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: #fff;
  padding-bottom: 1%;
  padding-top: 1%;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  cursor: pointer;
  font-size: 1.5em;
}

.buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  background-color: #555;
  color: #fff;
  cursor: pointer;
}

.btn:hover {
  background-color: #777;
}
</style>
