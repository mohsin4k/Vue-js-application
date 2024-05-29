import Api from "./Api.js";

export default {
  getWishList() {
    return Api().get("users/get/wish-list");
  },

  addToWishList(reqObj) {
    return Api().post("users/add-wishlist", reqObj);
  },

  deleteWishlistItem(id) {
    return Api().delete(`users/delete-wishlist/${id}`);
  },
};
