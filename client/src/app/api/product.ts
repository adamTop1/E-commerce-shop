import { productType } from "@/types/product";
import axios from "axios";

export const getProducts = async () => {
  return await axios.get("http://localhost:3001/product");
};

export const addProduct = async ({name, price, image}: productType) => {
  return await axios.post("http://localhost:3001/product", {name, price, image});
};