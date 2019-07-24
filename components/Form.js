import React from "react";
import styled from "styled-components";
import DropdownOptions from "./DropdownOptions";

const Form = ({ room, onCheck, checked, orderHandler, order }) => {
  return (
    <Container>
      <Header>
        {room.optional && (
          <Checkbox
            type="checkbox"
            name="room"
            value={room.name}
            onClick={() => onCheck()}
            checked={checked}
          />
        )}
        {room.name}
      </Header>
      <Section>
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
  background: ${props => props.theme.grey};
  padding: 2%;
  border-radius: 2%;
`;

const Section = styled.div`
  height: 98%;
  background: white;
  border-radius: 2%;
  grid-template-columns: 2fr;
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
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
  margin-right: 10px;
`;
