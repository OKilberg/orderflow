import React from "react";
import { css } from "../../../styled-system/css";
import { styled } from "../../../styled-system/jsx";

const orderSteps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
};

export const OrderSteps = ({children}) => {
  return (
    <div className={css(orderSteps)}>
        {children}
      
    </div>
  );
};


const stepContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const StyledStepCircle = styled("div", {
  base: {
    borderRadius: "100%",
    width: "50px",
    height: "50px",
  }, // Conditional styling seems to require variants, since styles are loaded on build
  variants: {
    variant: {
      active: {
        backgroundColor: "blue.500",
      },
      nonActive: {
        backgroundColor: "blue.100",
      },
    },
  },
});

export const Step = ({ label, active }: { label: string; active?: boolean }) => {
  const variant = active ? "active" : "nonActive";

  return (
    <div className={css(stepContainer)}>
      <StyledStepCircle variant={variant} />
      <p>{label}</p>
    </div>
  );
};
