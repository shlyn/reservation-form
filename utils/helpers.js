export const editReservation = (id, value, key, order) => {
  const updatedOrder = [...order];

  updatedOrder.map((data, i) => {
    if (data.id === id) {
      data[key] = value;
      return updatedOrder;
    }
  });
};
