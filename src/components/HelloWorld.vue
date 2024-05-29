<template>
  <div>
    <PageHeader :wishlistButton="true" :productsButton="true" />
    <h1 class="cus-heading">Welcome to wishlist app!</h1>
    <img
      :src="require('../assets/wishlist.jpg')"
      alt="Product Image"
      class="custom"
    />
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";

export default {
  name: "HelloWorld",
  components: {
    PageHeader,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom {
  width: 100%;
}

.cus-heading {
  align-items: center;
  margin-left: 30%;
}
</style>
