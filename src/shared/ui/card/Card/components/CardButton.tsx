"use client";
import { WithChildren } from "@/shared/types/types";
import React from "react";
import { styled } from "../../../../../../styled-system/jsx";

type CardOrderButtonProps = { variant?: "added" } & WithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledCardOrderButton = styled("button", {
  base: {
    backgroundColor: "blue.400", // Blue.600
    color: "#FFFFFF",
    fontWeight: "600",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem", // md
    display: "flex",
    justifyContent: "center",
    _hover: { backgroundColor: "#2B6CB0", cursor: "pointer" }, // Blue.700
  },
  variants: {
    variant: {
      added: {
        backgroundColor: "white",
        color: "blue.400",
        outline: "solid 1px",
        outlineColor: "blue.400",
        _hover: { backgroundColor: "blue.100", cursor: "pointer" },
      },
    },
  },
});

const CardOrderButton = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  variant,
}: CardOrderButtonProps) => {
  return (
    <StyledCardOrderButton
      variant={variant}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </StyledCardOrderButton>
  );
};

export default CardOrderButton;
