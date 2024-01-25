export default function DeliveryFeeForm({ onValue }) {
  return (
    <form onSubmit={onValue}>
      <label htmlFor="value-input">Cart Value</label>
      <input type="number" id="value-input" name="value" />
      <label htmlFor="distance-input">Delivery distance</label>
      <input type="number" id="distance-input" name="distance" />
      <label htmlFor="items-input">Amount of Items</label>
      <input type="number" id="items-input" name="items" />
      <label htmlFor="time-input">Time</label>
      <input type="date" id="time-input" name="time" />
      <button type="submit">Calculate Delivery Price</button>
    </form>
  );
}
