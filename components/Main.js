import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import rooms from "../utils/data";
import Form from "./Form";
import { connect } from "react-redux";
import { getOrder, reviseOrder, saveOrder } from "../redux/reservation/actions";

const Main = props => {
  const { order } = props.order;

  useEffect(() => {
    const completedOrder = JSON.parse(localStorage.getItem("order"));
    if (completedOrder) {
      props.reviseOrder(completedOrder);
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
            reviseOrder={props.reviseOrder}
            index={i}
          />
        ))}
      </Wrapper>
      <div>
        <Button onClick={submitHandler}>Submit</Button>
      </div>
    </Container>
  );
};

const mapDispatchToProps = {
  getOrder,
  reviseOrder,
  saveOrder
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
  height: 150px;
  width: 100%;
`;
