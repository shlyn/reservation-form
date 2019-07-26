import React from "react";
import { shallow } from "enzyme";
import Form from "../components/Form";
import { addRooms, removeRooms } from "../utils/helpers";

describe("Form", () => {
  // matches snapshot

  const defaultOrder = [{ id: 1, adults: 1, children: 0 }];
  const wrapper = shallow(
    <Form
      room={{ id: 2, adults: 1, children: 0 }}
      order={[{ id: 1, adults: 1, children: 0 }]}
      reviseOrder={jest.fn}
      index={1}
    />
  );

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("add Rooms runs correctly", () => {
    expect(
      addRooms({
        reviseOrder: jest.fn,
        order: [{ id: 1, adults: 2, children: 0 }],
        room: { id: 3, adults: 1, children: 0 }
      })
    ).toStrictEqual([
      { id: 1, adults: 2, children: 0 },
      { id: 2, adults: 1, children: 0 },
      { id: 3, adults: 1, children: 0 }
    ]);
  });

  it("remove Rooms to runs correctly", () => {
    expect(
      removeRooms({
        reviseOrder: jest.fn,
        order: [
          { id: 1, adults: 2, children: 0 },
          { id: 2, adults: 1, children: 0 },
          { id: 3, adults: 1, children: 0 }
        ],
        room: { id: 3, adults: 1, children: 0 },
        index: 1
      })
    ).toStrictEqual([{ id: 1, adults: 2, children: 0 }]);
  });
});
