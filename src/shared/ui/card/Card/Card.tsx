import React from "react";
import StyledCard from "./StyledCard";
import { WithChildren } from "@/shared/types/types";

type CardProps = { variant?: "product" } & WithChildren;

const Card = ({ children, variant }: CardProps) => {
  return <StyledCard data-state variant={variant}>{children}</StyledCard>;
};

export default Card;
