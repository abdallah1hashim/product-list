export async function getProductsCollection() {
  const req = await fetch("http://localhost/product-list/api/products");
  const data = req.json();
  return data;
}
export async function addProduct(data) {
  console.log(data);
  const req = await fetch("http://localhost/product-list/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log(req);
  return req;
}
