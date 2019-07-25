import React, { useEffect } from "react";
import styled from "styled-components";
import DropdownOptions from "./DropdownOptions";
import { editReservation } from "../utils/helpers";

const Form = ({ room, order, reviseOrder, index }) => {
  const checkHandler = e => {
    if (!e.target.checked) {
      removeRooms();
    } else {
      addRooms();
    }
  };

  const orderHandler = (id, value, key) => {
    const updatedOrder = order.map(a => Object.assign({}, a));

    updatedOrder.map((data, i) => {
      if (data.id === id) {
        data[key] = value;
      }
    });
    reviseOrder(updatedOrder);
  };

  const removeRooms = () => {
    const updatedOrder = order.map(a => Object.assign({}, a));
    let removals = 1;
    updatedOrder.map(data => {
      if (data.id > room.id) {
        removals++;
      }
    });
    updatedOrder.splice(index, index + removals);
    reviseOrder(updatedOrder);
  };

  const addRooms = () => {
    const updatedOrder = order.map(a => Object.assign({}, a));
    let firstRoom = 1;
    const lastRoom = room.id;
    let additions = [];

    while (firstRoom <= lastRoom) {
      additions.push(firstRoom++);
    }

    additions.map(roomId => {
      if (!order.some(data => data.id === roomId)) {
        updatedOrder.push({ id: roomId, adults: 1, children: 0 });
      }
    });
    reviseOrder(updatedOrder);
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
            onClick={checkHandler}
            checked={checked}
          />
        )}
        {room.name}
      </Header>
      <Section checked={checked}>
        <DropdownOptions
          adults={room.adults}
          children={room.children}
          checked={checked}
          room={room}
          orderHandler={orderHandler}
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
  border-radius: 2%;
  transition: 0.3s all ease-in;
`;

const Section = styled.div`
  height: 98%;
  background: ${props => (props.checked ? "white" : "transparent")};
  border-radius: 2%;
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
