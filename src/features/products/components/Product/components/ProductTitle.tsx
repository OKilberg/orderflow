import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type ProductTitleProps = {} & WithChildren;

const StyledProductTitle = styled("h3", {
  base: {
    marginTop: "1rem",
    fontSize: "1.125rem", // lg
    fontWeight: "600", // semibold
  },
});

const ProductTitle = ({ children }: ProductTitleProps) => {
  return <StyledProductTitle>{children}</StyledProductTitle>;
};

export default ProductTitle;
