import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProductsAPI = async () => {
  const response = await API.get("/products?limit=500");
  return response.data.products;
};