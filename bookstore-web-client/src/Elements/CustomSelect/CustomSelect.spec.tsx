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

  it("should focus the selected option (or the first if there is none) when activated", () => {
    const SelectField = wrapper.find("SelectField");
    SelectField.simulate("click");
    const Options = wrapper.find(Option);

    expect(Options.at(0).getDOMNode()).toEqual(document.activeElement);
  });

  it("should react properly on up and down key presses", () => {
    const SelectField = wrapper.find("SelectField");
    SelectField.simulate("click");
    const Options = wrapper.find(Option);

    for (let i = 0; i < Options.length; ++i) {
      Options.at(i).simulate("keydown", { key: "ArrowDown" });
    }
    expect(document.activeElement).toEqual(Options.last().getDOMNode());

    for (let i = Options.length - 1; i >= 0; --i) {
      Options.at(i).simulate("keydown", { key: "ArrowUp" });
    }
    expect(document.activeElement).toEqual(Options.first().getDOMNode());
  });

  it("should have proper HTML and ARIA attributes", () => {
    const SelectField = wrapper.find("SelectField");
    SelectField.simulate("click");
    const Options = wrapper.find("StyledOption");
    const SelectList = wrapper.find("SelectList");

    expect(SelectField.props().tabIndex).toEqual("0");
    expect(SelectList.props().role).toEqual("listbox");

    for (let i = 0; i < Options.length; ++i) {
      expect(Options.at(i).props().tabIndex).toEqual("-1");
      expect(Options.at(i).props().role).toEqual("option");
    }
  });
});
