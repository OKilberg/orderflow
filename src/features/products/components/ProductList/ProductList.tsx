import Grid from "@/shared/ui/layout/Grid/Grid";
import React from "react";
import ProductComponent from "../Product/Product";
import { Product } from "@/shared/types/types";

type Props = {
  products: Array<Product>;
};

const ProductList = async ({ products }: Props) => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductComponent key={product.productId} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
