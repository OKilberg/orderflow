import { css } from "../../styled-system/css";
import { Step, OrderSteps } from "@/components/OrderSteps/OrderSteps";
import { AddService, RemoveService } from "@/actions/actions";

export default async function Summary({ searchParams }) {
  const data = await fetch("http://localhost:3000/cart", { cache: "no-cache" });
  const cart = await data.json();

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
      <section>
        <div>
          {cart &&
            cart.map(({ id, productName, cost, paymentInterval }) => (
              <div className={css({display: 'flex', gap: '4'})} key={id}>
                <p>{`${productName} - ${cost} ${paymentInterval}`}</p>
                <form action={RemoveService}>
                  <input hidden name="id" value={id} readOnly/>
                  <button className={css({textDecoration: 'underline', color: 'red'})} type="submit">Remove</button>
                </form>
              </div>
            ))}
        </div>
        <br/>
        <div>
          <form action={AddService}>
            <button className={css({textDecoration: 'underline', color: 'blue'})} type="submit">Add</button>
          </form>
        </div>
      </section>
    </main>
  );
}
