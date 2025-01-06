import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type CardTitleProps = {} & WithChildren;

const StyledCardTitle = styled("h3", {
  base: {
    marginTop: "1rem",
    fontSize: "1.125rem", // lg
    fontWeight: "600", // semibold
  },
});

const CardTitle = ({ children }: CardTitleProps) => {
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

export default CardTitle;
