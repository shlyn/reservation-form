import React from "react";
import { shallow } from "enzyme";
import Main from "../components/Main";
import configureStore from "redux-mock-store";

const initialState = { order: [{ id: 1, adults: 1, children: 0 }] };
const mockStore = configureStore();
let store, container;

beforeEach(() => {
  store = mockStore(initialState);
  container = shallow(<Main store={store} />);
});

it("Component Renders", () => {
  expect(container.length).toEqual(1);
});

it("Prop matches with initialState", () => {
  expect(container.prop("output")).toEqual(initialState.output);
});

describe("Main", () => {
  it("matches snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
