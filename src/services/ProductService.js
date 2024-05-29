import Api from "./Api.js";

export default {
  getProduct() {
    return Api().get("products/get-all-products");
  },
};
