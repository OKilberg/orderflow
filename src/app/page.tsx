import Button from "@/components/Button/Button";
import { css } from "../../styled-system/css";
import { Step, OrderSteps } from "@/components/OrderSteps/OrderSteps";

export default function Summary({ searchParams }) {
  const { step } = searchParams;
  return (
    <main
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
    </main>
  );
}
