import React from "react";
import StyledList from "./StyledList";
import { WithChildren } from "@/shared/types/types";

type ListProps = { variant?: "row" } & WithChildren;

const List = ({ children, variant }: ListProps) => {
  return <StyledList variant={variant}>{children}</StyledList>;
};

export default List;
