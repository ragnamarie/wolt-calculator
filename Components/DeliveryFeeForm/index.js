import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 5px;
  margin-bottom: 10px;
  border: none;
`;

export const StyledButton = styled.button`
  background-color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  background-color: white;
  border: none;
  box-shadow: 4px 4px black;
`;

export default function DeliveryFeeForm({ onFormInput }) {
  return (
    <StyledForm onSubmit={onFormInput}>
      <StyledLabel htmlFor="value-input">Cart Value</StyledLabel>
      <StyledInput type="number" id="value-input" name="value" required />

      <StyledLabel htmlFor="distance-input">Delivery distance</StyledLabel>
      <StyledInput type="number" id="distance-input" name="distance" required />

      <StyledLabel htmlFor="items-input">Amount of Items</StyledLabel>
      <StyledInput type="number" id="items-input" name="items" required />

      <StyledLabel htmlFor="datetime-input">Date and Time</StyledLabel>
      <StyledInput
        type="datetime-local"
        id="datetime-input"
        name="time"
        required
      />

      <StyledButton type="submit">Calculate Delivery Price</StyledButton>
    </StyledForm>
  );
}
