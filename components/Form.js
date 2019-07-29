import React from "react";
import styled from "styled-components";
import DropdownSection from "./DropdownSection";
import { addRooms, removeRooms } from "../utils/helpers";

const Form = ({ room, order, reviseOrder, index }) => {
  const checkHandler = e => {
    if (!e.target.checked) {
      removeRooms({ reviseOrder, order, room, index });
    } else {
      addRooms({ reviseOrder, order, room });
    }
  };

  const checked = order.some(data => data.id === room.id);

  return (
    <Container checked={checked}>
      <Header>
        {room.optional && (
          <Checkbox
            type="checkbox"
            name="room"
            value={room.name}
            onChange={checkHandler}
            checked={checked}
            hideBorder
          />
        )}
        {room.name}
      </Header>
      <Section checked={checked}>
        <DropdownSection
          adults={room.adults}
          children={room.children}
          checked={checked}
          id={room.id}
          reviseOrder={reviseOrder}
          order={order}
        />
      </Section>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  display: grid;
  grid-template-rows: 25% 75%;
  height: 100%;
  width: 100%;
  background: ${props =>
    props.checked ? props.theme.grey : props.theme.disabledLightPurple};
  border: ${props =>
    !props.checked
      ? `solid ${props.theme.disabledPurple} 5px`
      : `solid ${props.theme.grey} 5px`};
  border-radius: 5px;
  transition: 0.3s all ease-in;
`;

const Section = styled.div`
  height: 98%;
  background: ${props => (props.checked ? "white" : "transparent")};
  border-radius: 5px;
  grid-template-columns: 2fr;
  transition: 0.3s background ease-in;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

const Checkbox = styled.input`
  -ms-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
  margin-right: 10px;
`;
