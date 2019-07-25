import reservationReducer from "./reservation";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  order: reservationReducer
});

export default createStore(rootReducer, {});
