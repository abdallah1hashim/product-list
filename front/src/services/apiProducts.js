import axios from "axios";

export async function getProductsCollection() {
  const res = await axios.get("http://product-list.000.pe/api/products");
  // const res = await axios.get("http://localhost/product-list/api/products");

  return res.data;
}

export async function addProduct(data) {
  const res = axios.post("http://product-list.000.pe/api/products", data, {
    // const res = await axios.post(
    //   "http://localhost/product-list/api/products",
    //   data,
    //   {
    headers: { "Content-Type": "application/json" },
  });
  return res;
}
export async function deleteProduct(data) {
  const req = await fetch("http://product-list.000.pe/api/products/delete", {
    // const req = await fetch("http://localhost/product-list/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return req;
}
