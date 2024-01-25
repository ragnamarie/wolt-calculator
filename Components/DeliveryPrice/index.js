export default function DeliveryPrice({ value }) {
  const finalValue = value < 10 ? 10 : value;
  return <p>Delivery Price: {finalValue} </p>;
}
