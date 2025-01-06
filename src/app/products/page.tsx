import ProductsSection from "@/features/products/ProductsSection";
import Main from "@/shared/ui/layout/Main/Main";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <Main>
      <ProductsSection />
    </Main>
  );
};

export default Products;
