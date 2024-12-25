import Button from "@/components/Button/Button";
import { css } from "../../../styled-system/css";
import Cart from "@/components/Cart/Cart";
import Addons from "@/components/Addons/Addons";

export default async function Summary() {
  console.log("Checkout page was rerendered.");

  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <section
        className={css({
          width: 796,
          display: "flex",
          flexDir: "column",
          padding: 18,
          border: "1px solid",
        })}
      >
        <div>
          <h2 className={css({ fontSize: "1.5rem" })}>Order Summary</h2>
          <h3 className={css({ opacity: "0.8" })}>
            Review your cart and supplemental products for checkout.
          </h3>
          <Cart />
        </div>
        <br />
        <section
          className={css({
            display: "flex",
            flexDir: "column",
            padding: 18,
            border: "1px solid",
            justifyContent: "center",
          })}
        >
          <Addons/>
        </section>
        <br />
        <div>
          <Button />
        </div>
      </section>
    </main>
  );
}
