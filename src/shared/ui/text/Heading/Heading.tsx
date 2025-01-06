import React from "react";
import StyledHeading from "./StyledHeading";
import { WithChildren } from "@/shared/types/types";

type HeadingProps = {
  size?: "md";
} & WithChildren;

const Heading = ({ children, size }: HeadingProps) => {
  return <StyledHeading size={size}>{children}</StyledHeading>;
};

export default Heading;
