interface DeliveryPriceProps {
  value: number | null;
  distance: number | null;
  items: number | null;
  time: string | null;
}

export default function DeliveryPrice({
  value,
  distance,
  items,
  time,
}: DeliveryPriceProps): JSX.Element {
  if (value === null || distance === null || items === null || time === null) {
    return <p>Delivery Price: 0 Euro</p>; // or some other loading indicator or message
  }

  // determine fee for order value
  const valueCost: number = value < 10 ? 10 - value : 0;

  // determine fee for distance
  let distanceCost: number = 2;

  if (distance > 1000) {
    const additionalDistance: number = (distance - 1000) / 500; // Calculate additional cost for every 500 units beyond 1000

    // check if there's a remainder after dividing by 500
    distanceCost +=
      additionalDistance % 1 === 0
        ? additionalDistance
        : Math.floor(additionalDistance) + 1;
  }

  // determine fee for number of items
  let itemCost: number = 0;

  if (items > 4) {
    const additionalItems: number = items - 4;
    itemCost += additionalItems * 0.5;
  }

  if (items > 11) {
    itemCost += 1.2;
  }

  // determine fee for time of delivery
  const deliveryTime: Date = new Date(time);
  const isFriday: boolean = deliveryTime.getDay() === 5; // 5 corresponds to Friday
  const isBetween3to7PM: boolean =
    deliveryTime.getHours() >= 15 && deliveryTime.getHours() < 19;

  let timeCost: number = 0;

  if (isFriday && isBetween3to7PM) {
    timeCost = (valueCost + distanceCost + itemCost) * 0.2; // Multiply totalFee by 1.2
  }

  // determine total fee
  let totalFee: number = valueCost + distanceCost + itemCost + timeCost;

  if (totalFee > 15) {
    totalFee = 15;
  }

  // factor so that the total fee can be set to 0 if the cart value is equal or more than 200
  const factor: number = value < 200 ? 1 : 0;

  return (
    <p data-test-id="fee" role="status" aria-live="polite">
      Delivery Price: {(totalFee * factor).toFixed(2)} Euro
    </p>
  );
}
