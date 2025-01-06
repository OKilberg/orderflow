import React from "react";
import StyledGrid from "./StyledGrid";
import { WithChildren } from "@/shared/types/types";

type GridProps = {} & WithChildren;

const Grid = ({ children }: GridProps) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;
