import Vue from "vue";
import Router from "vue-router";
import ProductPage from "../components/ProductPage.vue";
import UserSignup from "../components/UserSignup.vue";
import UserLogin from "../components/UserLogin.vue";
import HelloWorld from "../components/HelloWorld.vue";
import WishlistPage from "../components/WishlistPage.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HelloWorld,
    },
    {
      path: "/products",
      name: "Product",
      component: ProductPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/signup",
      name: "Signup",
      component: UserSignup,
    },
    {
      path: "/login",
      name: "Login",
      component: UserLogin,
    },
    {
      path: "/wishlist",
      name: "Wishlist",
      component: WishlistPage,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const token = localStorage.getItem("authToken");

  if (requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
