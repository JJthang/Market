import axios from "axios";

export const fetchOneProduct = (id) => {
  return axios.get("https://dummyjson.com/products/" + id);
};
