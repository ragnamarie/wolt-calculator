import DeliveryFeeForm from "../Components/DeliveryFeeCalculator";
import DeliveryPrice from "../Components/DeliveryPrice";
import { useState } from "react";

export default function CheckOutPage() {
  const [value, setValue] = useState();

  function handleValue(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const cartValue = formData.get("value");

    setValue(cartValue);
  }

  console.log(value);

  return (
    <>
      <h1>DELIVERY FEE CALCULATOR</h1>
      <DeliveryFeeForm onValue={handleValue} />
      <DeliveryPrice value={value} />
    </>
  );
}
