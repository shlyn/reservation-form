import React from "react";
import { shallow } from "enzyme";
import rooms from "../utils/data";
import DropdownOptions from "../components/DropdownOptions";
import { jestPreset } from "ts-jest";

describe("Dropdown Options", () => {
  // matches snapshot

  const defaultOrder = [{ id: 1, adults: 1, children: 0 }];
  const wrapper = shallow(
    <DropdownOptions
      adults={[1, 2]}
      children={[1, 2, 3]}
      checked={true}
      id={1}
      orderHandler={jest.fn}
      order={defaultOrder}
    />
  );

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  // renders with correct data
  it("room data to be accurate", () => {
    expect(rooms.length).toEqual(4);
  });

  // renders with correct data
  it("renders the correct dropdowns", () => {
    // const mockMyEventHandler = jest.fn();
    // wrapper.setProps({ onChange: mockMyEventHandler });
    console.log(wrapper.find("select"));
    // wrapper.find("select").simulate("change", "", { value: ["val"] });
    // expect(mockMyEventHandler).toHaveBeenCalledWith(["val"]);
  });
});
