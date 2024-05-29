import Api from "./Api.js";

//This file uses axios to hit the end point in backend and call the api
export default {
  signup(credentials) {
    return Api().post("users/signup", credentials);
  },
  login(credentials) {
    return Api().post("users/login", credentials);
  },
  logout() {
    return Api().post("users/logout");
  },
};
