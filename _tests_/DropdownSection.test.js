import React from "react";
import { shallow } from "enzyme";
import rooms from "../utils/data";
import DropdownSection from "../components/DropdownSection";
import { handleChange } from "../components/DropdownSection";

describe("Dropdown Options", () => {
  // matches snapshot

  const defaultOrder = [{ id: 1, adults: 1, children: 0 }];
  const wrapper = shallow(
    <DropdownSection
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

  it("data to be accurate", () => {
    expect(rooms.length).toEqual(4);
  });

  it("Dropdowns to render", () => {
    const dropdown = wrapper.find("DropdownOptions").at(1);
    expect(dropdown).toBeDefined();
  });
});
