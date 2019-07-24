import React, { useState } from "react";
import styled from "styled-components";
import rooms from "../utils/data";
import Form from "./Form";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const [order, setOrder] = useState([{ id: 1, adults: 1, children: 0 }]);

  const orderHandler = (id, value) => {
    order.map(data => {
      if (data.hasOwnProperty(id)) {
        console.log(data.id);
      }
      console.log(id, value);
    });

    setOrder();
  };
  return (
    <Container>
      <Wrapper>
        {rooms.map((room, i) => (
          <Form
            key={room.id}
            room={room}
            checked={i <= counter}
            onCheck={() => setCounter(i)}
            order={order}
            orderHandler={orderHandler}
          />
        ))}
      </Wrapper>
      <Button>Submit</Button>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(500px, 90% 10%));
  height: 50vh;
  width: 100%;
  padding: 20px;
`;

const Button = styled.button`
  height: 5vh;
  width: 6vw;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 5fr));
  grid-gap: 20px;
  height: 150px;
  width: 100%;
`;
