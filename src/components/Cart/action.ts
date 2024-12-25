"use server";
import { revalidateTag } from "next/cache";

const cartBaseUrl = "http://localhost:3000/cart";

export const addCartService = async () => {
  const data = {
    id: "2",
    productName: "Saas-Service Premium",
    cost: "$35",
    paymentInterval: "per month",
  };

  const response = await fetch("http://localhost:3000/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  /*
  NOTE: I have discovered that revalidating tags for server components currently in view will cause full rerenders (down to root layout).
  This was not the expected behavior, so it seems that client component is the only way to achieve the intended behavior without rerendering all other components on the page.
  */
  revalidateTag("cart"); //

  console.log("AddCartService", result);
};

export const removeCartService = async (formData: FormData) => {
  const id = formData.get("id");

  const url = `${cartBaseUrl}/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
  });

  const result = await response.json();

  revalidateTag("cart");

  console.log(result);
};
