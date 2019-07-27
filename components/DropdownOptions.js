import React from "react";
import styled from "styled-components";

const DropdownOptions = ({
  title,
  ages,
  currentValue,
  handleChange,
  guestType,
  checked,
  options
}) => {
  return (
    <Section>
      {title} <br />
      {ages}
      <Dropdown
        value={currentValue ? currentValue : 1}
        onChange={e => handleChange(e, guestType)}
      >
        {options.map((guests, index) => (
          <option key={guests + index} value={guests} disabled={!checked}>
            {guests}
          </option>
        ))}
      </Dropdown>
    </Section>
  );
};

export default DropdownOptions;

const Section = styled.div`
  font-size: 1.1em;
  display: grid;
  grid-gap: 5px;
  align-items: center;
`;
const Dropdown = styled.select`
  width: 50px;
  font-size: 1.05em;
`;
