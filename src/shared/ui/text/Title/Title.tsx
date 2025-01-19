import React from "react";
import StyledTitle from "./StyledTitle";
import { WithChildren } from "@/shared/types/types";

type TitleProps = {
  size?: "md";
} & WithChildren;

const Title = ({ children, size }: TitleProps) => {
  return <StyledTitle size={size}>{children}</StyledTitle>;
};

export default Title;
