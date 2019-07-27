import React from "react";
import { shallow } from "enzyme";
import rooms from "../utils/data";
import DropdownOptions from "../components/DropdownOptions";
import { jestPreset } from "ts-jest";

describe("Dropdown Options", () => {
  const wrapper = shallow(
    <DropdownOptions
      title={"unicorns"}
      ages={"20-30"}
      currentValue={1}
      handleChange={jest.fn}
      guestType={"adults"}
      checked
      options={[1, 2, 3]}
    />
  );

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders only one dropdown", () => {
    const dropdown = wrapper.find("DropdownOptions__Dropdown");

    expect(dropdown.length).toEqual(1);
  });

  it("changes the value when selected", () => {
    const dropdown = wrapper.find("DropdownOptions__Dropdown");
    dropdown.simulate("change", { target: { value: 1 }, key: "adults" });

    expect(dropdown.props().value).toBe(1);
  });
});
