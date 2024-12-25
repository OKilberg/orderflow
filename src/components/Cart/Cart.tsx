import React from "react";
import { css } from "../../../styled-system/css";
import { fetchCartData } from "./query";
import { addCartService, removeCartService } from "./action";
import Button from "../Button/Button";
import Row from "../Row/Row";

const Cart = async () => {
  const cart = await fetchCartData();

  const cartTotal = cart.reduce((acc, item) => acc + item.cost, 0);

  console.log("Cart component was rerendered.");

  return (
    <section
      className={css({
        display: "flex",
        flexDir: "column",
        padding: 18,
        border: "1px solid",
        justifyContent: "center",
      })}
    >
      <div>
        <h2 className={css({ fontSize: "1.5rem" })}>Your Cart</h2>
        {cart &&
          cart.map(({ id, productName, cost, paymentInterval }) => (
            <div
              className={css({
                display: "flex",
                gap: "4",
                justifyContent: "space-between",
              })}
              key={id}
            >
              <p>{`${productName} - ${cost} ${paymentInterval}`}</p>
              <form action={removeCartService}>
                <input hidden name="id" value={id} readOnly />
                <button
                  className={css({ textDecoration: "underline", color: "red" })}
                  type="submit"
                >
                  Remove
                </button>
              </form>
            </div>
          ))}
        <Row direction="reverse">
          <p>Total: <span>{`$${cartTotal}`}</span></p>
        </Row>
      </div>
    </section>
  );
};

export default Cart;

/*

<br />
      <div>
        <form action={addCartService}>
          <button
            className={css({ textDecoration: "underline", color: "blue" })}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>

*/
