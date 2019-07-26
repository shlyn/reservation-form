import React from "react";
import { shallow } from "enzyme";
import Main from "../components/Main";
import store from "../redux/index";
import { Provider } from "react-redux";

const setup = () =>
  shallow(
    <Provider store={store}>
      <Main order={[{ id: 1, adults: 2, children: 0 }]} reviseOrder={jest.fn} />
    </Provider>
  );

describe("Dropdown Options", () => {
  // matches snapshot
  const wrapper = setup();

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Test Submit Button", () => {
  it("Test click event", () => {
    const wrapper = setup();

    const mockCallBack = jest.fn();

    const button = wrapper.find("button");

    button.simulate("click");

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
