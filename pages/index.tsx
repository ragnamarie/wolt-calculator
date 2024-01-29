import React, { FC, useState } from "react";
import DeliveryFeeForm from "../Components/DeliveryFeeForm";
import DeliveryPrice from "../Components/DeliveryPrice";
import Layout from "../Components/Layout";

interface CheckOutPageProps {}

export default function CheckOutPage(props: CheckOutPageProps): JSX.Element {
  const [value, setValue] = useState<number | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [items, setItems] = useState<number | null>(null);
  const [time, setTime] = useState<string>("");

  function handleFormInput(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValue = parseFloat(formData.get("value") as string);
    const formDistance = parseInt(formData.get("distance") as string);
    const formItems = parseInt(formData.get("items") as string);
    const formTime = formData.get("time") as string;

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
    <Layout>
      <DeliveryFeeForm onFormInput={handleFormInput} />
      <DeliveryPrice
        value={value}
        distance={distance}
        items={items}
        time={time}
      />
    </Layout>
  );
}
