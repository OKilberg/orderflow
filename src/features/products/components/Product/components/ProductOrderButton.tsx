import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type ProductOrderButtonProps = {
  productSlug: string;
} & WithChildren;

const StyledProductOrderButton = styled("a", {
  base: {
    backgroundColor: "blue.400", // Blue.600
    color: "#FFFFFF",
    fontWeight: "600",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem", // md
    display: "flex",
    justifyContent: "center",
    _hover: { backgroundColor: "#2B6CB0" }, // Blue.700
  },
});

const ProductOrderButton = ({
  children,
  productSlug,
}: ProductOrderButtonProps) => {
  const productOrderUrl = `/order/${productSlug}`;

  return (
    <StyledProductOrderButton href={productOrderUrl}>
      {children}
    </StyledProductOrderButton>
  );
};

export default ProductOrderButton;
