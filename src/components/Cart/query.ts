export const fetchCartData = async () => {
  const data = await fetch("http://localhost:3000/cart", {
    cache: "no-cache",
    // cache: "no-store",
    next: { tags: ["cart"] },
  });

  return await data.json();
};
