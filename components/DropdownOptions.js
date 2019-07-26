import React from "react";
import styled from "styled-components";
import { orderHandler } from "../utils/helpers";

const DropdownOptions = ({
  adults,
  children,
  checked,
  id,
  reviseOrder,
  order
}) => {
  function handleChange(e, key) {
    const value = parseInt(e.target.value);
    orderHandler({ id, value, key, reviseOrder, order });
  }

  const currentValueAdults = checked
    ? order.filter(reservation => reservation.id === id)[0].adults
    : null;
  const currentValueChildren = checked
    ? order.filter(reservation => reservation.id === id)[0].children
    : null;

  return (
    <Container>
      <Section>
        Adults <br />
        (18+)
        <Dropdown
          value={currentValueAdults ? currentValueAdults : 1}
          onChange={e => handleChange(e, "adults")}
        >
          {adults.map((guests, index) => (
            <option key={guests + index} value={guests} disabled={!checked}>
              {guests}
            </option>
          ))}
        </Dropdown>
      </Section>
      <Section>
        Children <br />
        (0-17)
        <Dropdown
          value={currentValueChildren ? currentValueChildren : 0}
          onChange={e => handleChange(e, "children")}
        >
          {children.map((guests, index) => (
            <option key={guests + index} value={guests} disabled={!checked}>
              {guests}
            </option>
          ))}
        </Dropdown>
      </Section>
    </Container>
  );
};

export default DropdownOptions;

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  justify-items: center;
  align-items: center;
`;

const Section = styled.div`
  font-size: 1.1em;
  display: grid;
  grid-gap: 5px;
  align-items: center;
`;
const Dropdown = styled.select`
  width: 50px;
  font-size: 1.05em;
`;
