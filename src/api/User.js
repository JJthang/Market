import axios from "axios";

export const fetchUser = () => {
  return axios.get("https://dummyjson.com/carts/user/15");
};
