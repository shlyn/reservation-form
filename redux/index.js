import reservationReducer from "./reservation";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  reservation: reservationReducer
});

export default createStore(rootReducer, {});
