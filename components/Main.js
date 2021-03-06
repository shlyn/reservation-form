import React, { useState, useEffect } from "react";
import styled from "styled-components";
import rooms from "../utils/data";
import Form from "./Form";
import { connect } from "react-redux";
import { getOrder, reviseOrder } from "../redux/reservation/actions";

const Main = ({ reservation, reviseOrder }) => {
  const { order } = reservation;

  useEffect(() => {
    const completedOrder = JSON.parse(localStorage.getItem("order"));
    if (completedOrder) {
      reviseOrder(completedOrder);
    }
  }, []);

  const submitHandler = () => {
    localStorage.setItem("order", JSON.stringify(order));
  };

  return (
    <Container>
      <Wrapper>
        {rooms.map((room, i) => (
          <Form
            key={room.id}
            room={room}
            order={order}
            reviseOrder={reviseOrder}
            index={i}
          />
        ))}
      </Wrapper>
      <ButtonContainer>
        <Button onClick={submitHandler}>Submit</Button>
      </ButtonContainer>
    </Container>
  );
};

const mapDispatchToProps = {
  getOrder,
  reviseOrder
};

export default connect(
  state => state,
  mapDispatchToProps
)(Main);

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-rows: repeat(auto-fill, minmax(500px, 90% 10%));
  width: 100%;
  padding: 20px;
`;

const Button = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  background: ${props => props.theme.grey};
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  padding: 5px 10px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 5fr));
  grid-gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  justify-content: flex-start;
`;
