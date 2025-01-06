import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type ProductCardProps = {} & WithChildren;

const StyledProductCard = styled("article", {
  base: {
    border: "1px solid #E2E8F0", // Gray.200
    borderRadius: "0.5rem", // lg
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // sm shadow
    transition: "box-shadow 0.2s",
    _hover: { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }, // md shadow
  },
});

const ProductCard = ({ children }: ProductCardProps) => {
  return <StyledProductCard>{children}</StyledProductCard>;
};

export default ProductCard;
