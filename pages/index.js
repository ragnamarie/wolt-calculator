import DeliveryFeeForm from "../Components/DeliveryFeeForm";
import DeliveryPrice from "../Components/DeliveryPrice";
import { useState } from "react";

export default function CheckOutPage() {
  const [value, setValue] = useState();
  const [distance, setDistance] = useState();
  const [items, setItems] = useState();
  const [time, setTime] = useState();

  function handleFormInput(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValue = formData.get("value");
    const formDistance = formData.get("distance");
    const formItems = formData.get("items");
    const formTime = formData.get("time");

    setValue(formValue);
    setDistance(formDistance);
    setItems(formItems);
    setTime(formTime);
  }

  console.log(value);
  console.log(distance);
  console.log(items);
  console.log(time);

  return (
    <>
      <h1>DELIVERY FEE CALCULATOR</h1>
      <DeliveryFeeForm onFormInput={handleFormInput} />
      <DeliveryPrice value={value} distance={distance} items={items} time={time}/>
    </>
  );
}
