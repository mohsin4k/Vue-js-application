<template>
  <div>
    <PageHeader :wishlistButton="true" :productsButton="false" />
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id.N"
        :product="product"
        :addWishlistButton="true"
        :deleteWishlistButton="false"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ProductCard from "../components/ProductCard.vue";
import ProductService from "../services/ProductService.js";

export default {
  name: "HelloWorld",
  components: {
    PageHeader,
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await ProductService.getProduct();
        this.products = response.data;
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
