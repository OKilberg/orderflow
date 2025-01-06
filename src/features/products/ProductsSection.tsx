// A component rendering product items from /products

import Header from "@/shared/ui/layout/Header/Header";
import Section from "@/shared/ui/layout/Section/Section";
import React from "react";
import { fetchProducts } from "./query";
import ProductList from "./components/ProductList/ProductList";
import Heading from "@/shared/ui/text/Heading/Heading";
import HeadingSubtitle from "@/shared/ui/text/HeadingSubtitle/HeadingSubtitle";

type Props = {};

const ProductsSection = async (props: Props) => {
  const products = await fetchProducts();

  return (
    <Section>
      <Header>
        <Heading>Products</Heading>
        <HeadingSubtitle>Browse our digital products.</HeadingSubtitle>
      </Header>
      <ProductList products={products} />
    </Section>
  );
};

export default ProductsSection;
