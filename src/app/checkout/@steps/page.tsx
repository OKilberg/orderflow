import React from "react";
import { css } from "../../../../styled-system/css";
import { OrderSteps, Step } from "@/components/OrderSteps/OrderSteps";

const Steps = ({ searchParams }) => {
  const { step } = searchParams;

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <OrderSteps>
        <Step label="Summary" active={!step || step === "summary"} />
        <Step label="Details" active={step === "details"} />
        <Step label="Confirm" active={step === "confirm"} />
        <Step label="Success" active={step === "success"} />
      </OrderSteps>
    </div>
  );
};

export default Steps;
