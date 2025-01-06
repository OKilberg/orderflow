import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type CardDescriptionProps = {} & WithChildren;

const StyledCardDescription = styled("p", {
  base: {
    color: "#4A5568", // Gray.600
    marginTop: "0.5rem",
    fontSize: "0.875rem", // sm
    flexGrow: 1,
  },
});

const CardDescription = ({ children }: CardDescriptionProps) => {
  return <StyledCardDescription>{children}</StyledCardDescription>;
};

export default CardDescription;
