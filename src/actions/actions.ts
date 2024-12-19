"use server";

import { revalidatePath } from "next/cache";

const cartBaseUrl = "http://localhost:3000/cart";

export const AddService = async () => {
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

  revalidatePath("http://localhost:3000/cart");

  console.log(result);
};

export const RemoveService = async (formData: FormData) => {
  const id = formData.get("id");

  const url = `${cartBaseUrl}/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
  });

  const result = await response.json();

  revalidatePath("http://localhost:3000/cart");

  console.log(result);
};
