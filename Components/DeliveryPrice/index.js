export default function DeliveryPrice({ value, distance, items, time }) {
  // determine fee for order value
  const valueCost = value < 10 ? 10 - value : 0;

  // determine fee for distance
  let distanceCost = 2;

  if (distance > 1000) {
    const additionalDistance = (distance - 1000) / 500; // Calculate additional cost for every 500 units beyond 1000

    // Check if there's a remainder after dividing by 500
    distanceCost +=
      additionalDistance % 1 === 0
        ? additionalDistance
        : Math.floor(additionalDistance) + 1;
  }

  // determine fee for number of items
  let itemCost = 0;

  if (items > 4) {
    const additionalItems = items - 4;
    itemCost += additionalItems * 0.5;
  }

  // determine fee for time of delivery
  const deliveryTime = new Date(time);
  const isFriday = deliveryTime.getUTCDay() === 5; // 5 corresponds to Friday
  const isBetween3to7PM =
    deliveryTime.getUTCHours() >= 15 && deliveryTime.getUTCHours() < 19;

  let timeCost = 0;

  if (isFriday && isBetween3to7PM) {
    timeCost = (valueCost + distanceCost) * 0.2; // Multiply totalFee by 1.2
  }

  const totalFee = valueCost + distanceCost + itemCost + timeCost;

  console.log(isBetween3to7PM);
  console.log(deliveryTime);

  return <p>Delivery Price: {totalFee}</p>;
}
