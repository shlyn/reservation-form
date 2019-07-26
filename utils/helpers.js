export const orderHandler = ({ id, value, key, reviseOrder, order }) => {
  const updatedOrder = order.map(a => Object.assign({}, a));

  updatedOrder.map(data => {
    if (data.id === id) {
      data[key] = value;
    }
  });
  reviseOrder(updatedOrder);
  return updatedOrder;
};

export const removeRooms = ({ reviseOrder, order, room, index }) => {
  const updatedOrder = order.map(a => Object.assign({}, a));
  let removals = 1;
  updatedOrder.map(data => {
    if (data.id > room.id) {
      removals++;
    }
  });
  updatedOrder.splice(index, index + removals);
  reviseOrder(updatedOrder);
  return updatedOrder;
};

export const addRooms = ({ reviseOrder, order, room }) => {
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
  return updatedOrder;
};
