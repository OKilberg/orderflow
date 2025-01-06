import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type CardImageProps = {} & WithChildren &
  React.ImgHTMLAttributes<HTMLImageElement>;

const StyledCardImage = styled("img", {
  base: {
    width: "100%",
    height: "12rem",
    objectFit: "cover",
    borderRadius: "0.375rem", // md
  },
});

const CardImage = (props: CardImageProps) => {
  return <StyledCardImage {...props} />;
};

export default CardImage;
