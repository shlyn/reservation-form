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
  return (
    <Container>
      <Section>
        Adults <br />
        (18+)
        <Dropdown
          onChange={(e, value) => console.log(e, value)}
          value={order[room] && order[room].adults}
        >
          {adults.map((guests, index) => (
            <option
              key={room.id}
              value={guests}
              disabled={!checked}
              selected={index === 0}
            >
              {guests}
            </option>
          ))}
        </Dropdown>
      </Section>
      <Section>
        Children <br />
        (0-17)
        <Dropdown>
          {children.map((guests, index) => (
            <option
              key={room.id}
              value={guests}
              disabled={!checked}
              selected={index === 0}
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
