import "jsdom-global/register";

import React, { useState } from "react";
import { mount } from "../../enzyme";

import CustomSelect from "./CustomSelect";
import Option from "./Option";

const GenericSelectListContainer: React.FunctionComponent = () => {
  const [value, updateValue] = useState("Select");

  return (
    <CustomSelect
      label="Custom Select"
      onChange={value => updateValue(value)}
      value={value}
    >
      <Option value="Apple">Option 1</Option>
      <Option value="Orange">Option 2</Option>
      <Option value="Apple & Orange">Option 3</Option>
    </CustomSelect>
  );
};

describe("Custom Select", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<GenericSelectListContainer />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should display list of options when select field is clicked on", () => {
    wrapper.find("SelectField").simulate("click");
    expect(wrapper.find(Option)).toHaveLength(3);
  });

  it("should insert option value in select field when option is clicked on", () => {
    const SelectField = wrapper.find("SelectField");
    SelectField.simulate("click");
    const Options = wrapper.find(Option);

    Options.at(1).simulate("click");
    expect(SelectField.text()).toEqual(Options.at(1).props().value);
  });
});
