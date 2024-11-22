import { productType } from "@/types/product";
import api from "./axiosApi";

export const getProducts = async () => {
  return await api.get("/product")
};

export const addProduct = async ({name, price, image, stock}: productType) => {
  return await api.post("/product", {name, price, image, stock})
};

export const updateProduct = async ({id, name, price, stock}: productType) => {
  return await api.put(`/product`, {id, name, price, stock})
}