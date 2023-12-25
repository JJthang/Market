import axios from "axios";

export const fetchProduct = (limit) => {
  return axios.get(`http://localhost:3000/dataRoom/?_limit=${limit}&_page=1`);
};
