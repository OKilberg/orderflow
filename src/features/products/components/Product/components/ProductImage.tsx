import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type ProductImageProps = {} & WithChildren &
  React.ImgHTMLAttributes<HTMLImageElement>;

const StyledProductImage = styled("img", {
  base: {
    width: "100%",
    height: "12rem",
    objectFit: "cover",
    borderRadius: "0.375rem", // md
  },
});

const ProductImage = (props: ProductImageProps) => {
  return <StyledProductImage {...props} />;
};

export default ProductImage;
