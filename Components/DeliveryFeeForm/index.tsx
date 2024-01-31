import React, { FormEvent } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 5px;
  margin-bottom: 10px;
  border: none;
`;

const StyledButton = styled.button`
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

interface DeliveryFeeFormProps {
  onFormInput: (event: FormEvent<HTMLFormElement>) => void;
}

export default function DeliveryFeeForm({
  onFormInput,
}: DeliveryFeeFormProps): JSX.Element {
  // initialize variables in order to set current day and time as datetime default value
  const currentDate = new Date();
  const offsetMinutes = currentDate.getTimezoneOffset();
  currentDate.setMinutes(currentDate.getMinutes() - offsetMinutes);
  const currentDateTime = currentDate.toISOString().slice(0, 16);

  return (
    <StyledForm onSubmit={onFormInput} aria-labelledby="form-title">
      <StyledLabel htmlFor="value-input" id="value-label">
        Cart Value
      </StyledLabel>
      <div>
        <StyledInput
          type="text"
          min="0.00"
          id="value-input"
          name="value"
          data-test-id="value"
          placeholder="0.00"
          pattern="[0-9]*\.?[0-9]*"
          title="Please enter the cart value using only numbers and if necessary a decimal point"
          required
        />
        <span> Euro</span>
      </div>

      <StyledLabel htmlFor="distance-input" id="distance-label">
        Delivery distance
      </StyledLabel>
      <div>
        <StyledInput
          type="number"
          min="0"
          id="distance-input"
          name="distance"
          data-test-id="distance"
          placeholder="0"
          title="Please enter the distance in meters using whole numbers only"
          required
        />
        <span> m</span>
      </div>

      <StyledLabel htmlFor="items-input" id="items-label">
        Amount of Items
      </StyledLabel>
      <StyledInput
        type="number"
        min="1"
        id="items-input"
        name="items"
        data-test-id="items"
        placeholder="0"
        title="Please enter the amount of items using whole numbers only"
        required
      />

      <StyledLabel htmlFor="datetime-input" id="datetime-label">
        Date and Time
      </StyledLabel>
      <StyledInput
        type="datetime-local"
        id="datetime-input"
        name="time"
        data-test-id="time"
        defaultValue={currentDateTime}
        title="Please set date and time of the order"
        required
      />

      <StyledButton type="submit" aria-label="Calculate Delivery Price">
        Calculate Delivery Price
      </StyledButton>
    </StyledForm>
  );
}
