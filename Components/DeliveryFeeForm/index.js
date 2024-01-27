export default function DeliveryFeeForm({ onFormInput }) {
  return (
    <form onSubmit={onFormInput}>
      <label htmlFor="value-input">Cart Value</label>
      <input type="number" id="value-input" name="value" required />

      <label htmlFor="distance-input">Delivery distance</label>
      <input type="number" id="distance-input" name="distance" required />

      <label htmlFor="items-input">Amount of Items</label>
      <input type="number" id="items-input" name="items" required />

      <label htmlFor="datetime-input">Date and Time</label>
      <input type="datetime-local" id="datetime-input" name="time" required />

      <button type="submit">Calculate Delivery Price</button>
    </form>
  );
}
