import { GET_ORDER, REVISE_ORDER, SAVE_ORDER } from "./types";

export const getOrder = () => ({
  type: GET_ORDER
});

export const reviseOrder = order => ({
  type: REVISE_ORDER,
  payload: order
});

export const saveOrder = order => ({
  type: SAVE_ORDER,
  payload: order
});
