import React from "react";
import styled from "styled-components";
import { orderHandler } from "../utils/helpers";
import DropdownOptions from "./DropdownOptions";

const DropdownSection = ({
  adults,
  children,
  checked,
  id,
  reviseOrder,
  order
}) => {
  const handleChange = (e, key) => {
    const value = parseInt(e.target.value);
    orderHandler({ id, value, key, reviseOrder, order });
  };

  const currentValueAdults = checked
    ? order.filter(reservation => reservation.id === id)[0].adults
    : null;

  const currentValueChildren = checked
    ? order.filter(reservation => reservation.id === id)[0].children
    : null;

  return (
    <Container>
      <DropdownOptions
        title={"Adults"}
        ages={"(18+)"}
        currentValue={currentValueAdults}
        handleChange={handleChange}
        guestType={"adults"}
        checked={checked}
        options={adults}
      />
      <DropdownOptions
        title={"Children"}
        ages={"(0-17)"}
        currentValue={currentValueChildren}
        handleChange={handleChange}
        guestType={"children"}
        checked={checked}
        options={children}
      />
    </Container>
  );
};

export default DropdownSection;

const Container = styled.div`
  padding: 20px 10px 40px;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  justify-items: center;
  align-items: center;
`;
