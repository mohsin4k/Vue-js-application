<template>
  <div>
    <PageHeader :wishlistButton="false" :productsButton="true" />
    <h2 v-if="wishlist.length === 0">Sorry no Items in your Wishlist</h2>
    <div class="product-grid">
      <ProductCard
        v-for="product in wishlist"
        :key="product.id.N"
        :product="product"
        :addWishlistButton="false"
        :deleteWishlistButton="true"
        @render-product-page="fetchProducts"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ProductCard from "../components/ProductCard.vue";
import UserService from "../services/UserService.js";

export default {
  name: "HelloWorld",
  components: {
    PageHeader,
    ProductCard,
  },
  data() {
    return {
      wishlist: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await UserService.getWishList();
        this.wishlist = response.data;
      } catch (error) {
        console.log("Error in fetching products", error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
