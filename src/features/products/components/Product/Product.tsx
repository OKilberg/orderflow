import React from "react";
import ProductCard from "./components/ProductCard";
import ProductImage from "./components/ProductImage";
import ProductTitle from "./components/ProductTitle";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "./components/ProductPrice";
import ProductOrderButton from "./components/ProductOrderButton";
import type { Product } from "@/shared/types/types";

type Props = {
  product: Product;
};

const Product = ({ product }: Props) => {
  const {
    description,
    imageSrc,
    paymentInterval,
    price,
    productId,
    title,
    slug,
  } = product;

  return (
    <ProductCard>
      <ProductImage src={imageSrc}></ProductImage>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>
        ${price} {paymentInterval}
      </ProductPrice>
      <ProductOrderButton productSlug={slug}>Order</ProductOrderButton>
    </ProductCard>
  );
};

export default Product;
