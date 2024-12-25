import { css } from "../../../styled-system/css";

export default function Layout({
  children,
  steps,
}: Readonly<{
  children: React.ReactNode;
  steps: React.ReactNode;
}>) {
  console.log("Checkout layout was rerendered.");
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      {steps}
      {children}
    </div>
  );
}
