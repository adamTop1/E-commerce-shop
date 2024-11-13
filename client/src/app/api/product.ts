import { productType } from "@/types/product";
import api from "./axiosApi";

export const getProducts = async () => {
  return await api.get("/product");
};

export const addProduct = async ({name, price, image}: productType) => {
  return await api.post("/product", {name, price, image});
};