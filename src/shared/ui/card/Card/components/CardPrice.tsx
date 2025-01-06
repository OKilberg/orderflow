import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type CardPriceProps = {} & WithChildren;

const StyledCardPrice = styled("span", {
  base: {
    fontSize: "1.125rem", // lg
    fontWeight: "700", // bold
    color: "blue.300", // Green.600
  },
});

const CardPrice = ({ children }: CardPriceProps) => {
  return <StyledCardPrice>{children}</StyledCardPrice>;
};

export default CardPrice;
