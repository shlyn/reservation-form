import React from "react";
import styled from "styled-components";

const DropdownOptions = ({
  adults,
  children,
  checked,
  room,
  orderHandler,
  order
}) => {
  function handleChange(e, key) {
    orderHandler(room.id, parseInt(e.target.value), key);
  }

  const currentValueAdults = checked
    ? order.filter(reservation => reservation.id === room.id)[0].adults
    : null;
  const currentValueChildren = checked
    ? order.filter(reservation => reservation.id === room.id)[0].children
    : null;
  console.log(adults, children);
  return (
    <Container>
      <Section>
        Adults <br />
        (18+)
        <Dropdown onChange={e => handleChange(e, "adults")}>
          {adults.map((guests, index) => (
            <option
              key={guests + index}
              value={guests}
              disabled={!checked}
              selected={
                currentValueAdults ? currentValueAdults === guests : index === 0
              }
            >
              {guests}
            </option>
          ))}
        </Dropdown>
      </Section>
      <Section>
        Children <br />
        (0-17)
        <Dropdown onChange={e => handleChange(e, "children")}>
          {children.map((guests, index) => (
            <option
              key={guests + index}
              value={guests}
              disabled={!checked}
              selected={
                currentValueChildren
                  ? currentValueChildren === guests
                  : index === 0
              }
            >
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
