export async function fetchProducts() {
  const res = await fetch("http://localhost:3000/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function fetchProductsBySlug(productSlug: string) {
  const res = await fetch(
    `http://localhost:3000/products?slug=${productSlug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}
