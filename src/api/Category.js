import axios from "axios";

const fetchCategory = () => {
  return axios.get("https://dummyjson.com/products/categories");
};
const fetchOneCategory = (id) => {
  return axios.get(`https://dummyjson.com/products/category/${id}`);
};

export { fetchCategory, fetchOneCategory };
