import React, { ReactNode } from "react";
import StyledRow from "./StyledRow";

const Row = ({
  direction,
  children,
}: {
  direction?: "reverse";
  children: ReactNode;
}) => {
  return <StyledRow direction={direction}>{children}</StyledRow>;
};

export default Row;
