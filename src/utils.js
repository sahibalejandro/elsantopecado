import Dinero from "dinero.js";

export function currency(cents) {
  const dinero = new Dinero({ amount: cents });

  return dinero.toFormat();
}

export function itemTotal(item) {
  const extras = item.extras.reduce((amount, extra) => extra.price + amount, 0);
  return (item.price + extras) * item.quantity;
}
