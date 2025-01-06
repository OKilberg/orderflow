import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type ProductPriceProps = {} & WithChildren;

const StyledProductPrice = styled("span", {
  base: {
    fontSize: "1.125rem", // lg
    fontWeight: "700", // bold
    color: "blue.300", // Green.600
  },
});

const ProductPrice = ({ children }: ProductPriceProps) => {
  return <StyledProductPrice>{children}</StyledProductPrice>;
};

export default ProductPrice;
