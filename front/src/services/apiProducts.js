export async function getProductsCollection() {
  const req = await fetch("https://sisterly-tumbles.000webhostapp.com/api/products");
  const data = req.json();
  return data;
}
export async function addProduct(data) {
  const req = await fetch("https://sisterly-tumbles.000webhostapp.com/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return req;
}
export async function deleteProduct(data) {
  const req = await fetch("https://sisterly-tumbles.000webhostapp.com/api/products", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return req;
}
