<template>
  <div class="product-card">
    <!-- <img
      :src="require('../assets/chocolate.jpg')"
      alt="Product Image"
      class="product-image"
      v-if="product.name.S === 'Chocolate'"
    /> -->
    <h3>{{ product.name.S }}</h3>
    <p>${{ product.price.N }}</p>
    <div>
      <b-button class="mr-2 btn-sm">Buy</b-button>
      <b-button v-if="addWishlistButton" class="btn-sm" @click="addToWishList"
        >Wishlist</b-button
      >
      <b-button v-if="deleteWishlistButton" class="btn-sm" @click="deleteItem"
        >remove</b-button
      >
    </div>
  </div>
</template>

<script>
import UserService from "../services/UserService.js";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
    addWishlistButton: {
      type: Boolean,
      required: true,
    },
    deleteWishlistButton: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    async addToWishList() {
      try {
        await UserService.addToWishList({
          productId: this.product.id.N,
        });
      } catch (error) {
        console.log("Error occered while adding item to wishlist: ", error);
      }
    },

    async deleteItem() {
      try {
        await UserService.deleteWishlistItem(this.product.wishlistId);
        this.$emit("render-product-page");
      } catch (error) {
        console.log("Error occered while deleting item: ", error);
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  width: 18%;
}
.product-image {
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}
</style>
