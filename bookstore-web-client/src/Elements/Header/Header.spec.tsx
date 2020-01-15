import React from "react";
import { shallow } from "../../enzyme";

import Header from "./Header";

describe("Header", () => {
  it("displays", () => {
    const wrapper = shallow(<Header />);

    // Expect the wrapper object to be defined
    expect(wrapper.isEmpty()).toEqual(false);
  });

  it("renders an image as a first child", () => {
    const wrapper = shallow(<Header />);

    expect(
      wrapper
        .find("HeaderContainer")
        .childAt(0)
        .name()
    ).toEqual("HeaderImage");
  });

  it("renders main menu as the second child", () => {
    const wrapper = shallow(<Header />);

    expect(
      wrapper
        .find("HeaderContainer")
        .childAt(1)
        .name()
    ).toEqual("MainMenu");
  });

  it("renders main menu with three children", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find("MainMenu").children()).toHaveLength(3);
  });

  it("renders an image with alt attribute of 'Bookstore Logo' ", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find("HeaderImage").get(0).props.alt).toEqual(
      "Bookstore Logo"
    );
  });

  it("renders main menu with appropriate properties", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find("MainMenu").get(0).props.role).toEqual("menubar");
    expect(wrapper.find("MainMenu").get(0).props["aria-labelledby"]).toEqual(
      "Main menu"
    );
    expect(wrapper.find("MainMenu").get(0).props.tabindex).toStrictEqual("0");
  });
  //
  // it('renders correct text in item', () => {
  //   const items = ['John', 'James', 'Luke'];
  //   const wrapper = shallow(<List items={items} />);
  //
  //   //Expect the child of the first item to be an array
  //   expect(wrapper.find('.item').get(0).props.children).toEqual('John');
  // });
});
