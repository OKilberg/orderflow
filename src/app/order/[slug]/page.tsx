import React from "react";
import OrderSummary from "@/features/checkout/summary/components/OrderSummary";
import Main from "@/shared/ui/layout/Main/Main";
import Addons from "@/features/checkout/summary/components/Addons";
import { notFound } from "next/navigation";
import { fetchProductsBySlug } from "@/shared/query/products";
import { fetchAddonsByGroup } from "@/shared/query/addons";

const Order = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [product] = await fetchProductsBySlug(slug);

  if (!product) {
    notFound();
  }

  const addons = await fetchAddonsByGroup(product.productGroup);

  return (
    <Main>
      <OrderSummary products={[product]} />
      <Addons addons={addons} />
    </Main>
  );
};

export default Order;
