import React, { ReactElement, ReactNodeArray } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SelectField = styled.div`
  background-image: linear-gradient(white 65%, lightblue 100%);
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5px;
  user-select: none;
`;
SelectField.displayName = "SelectField";

const DropDown = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledSelectList = styled.div`
  pointer: cursor;
`;
StyledSelectList.displayName = "SelectList";

type Props = {
  /** Writeup above the whole select widget */
  label?: string | null | undefined;
  /** Content of the select field */
  value: string;
  /** Function which handles the select event */
  onChange: Object;
  /** Needed to style the out-most element of the component */
  className: string | undefined;
};

type State = {
  /** Whether to render the drop-down */
  isActive: boolean;
};

class CustomSelect extends React.Component<Props, State> {
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    label: null,
    className: undefined,
    value: null
  };

  state = {
    isActive: false
  };

  getSelectedOption = (value, options: ReactElement[] = []) => {
    if (options.length > 0) {
      // selected option
      const selectedOption = options.find(
        option => option.props && option.props.value === value
      );
      if (selectedOption) {
        return selectedOption;
      }
      // default option
      const defaultOption = options.find(
        option => option.props && option.props.isDefault
      );
      if (defaultOption) {
        return defaultOption;
      }
      // first option
      return options[0];
    }
    return null;
  };

  toggleDropDown = () => {
    this.setState(
      state => ({ isActive: !state.isActive }),
      () => {
        if (this.state.isActive) {
          // @ts-ignore: possibly null or undefined
          this.arrayOfOptionsRefs[this.currentOptionIndex].focus();
          return;
        }
        this.clearOptionsRefs();
      }
    );
  };

  arrayOfOptionsRefs: ReactNodeArray = [];

  setOptionRef = element => {
    if (element !== null) {
      this.arrayOfOptionsRefs.push(element);
    }
  };

  clearOptionsRefs = () => {
    this.arrayOfOptionsRefs = [];
  };

  selectFieldRef = React.createRef<"div">();

  currentOptionIndex = 0;

  // @ts-ignore: Value of declared variable not read (e)
  handleOptionsOnMouseOver = (e, index) => {
    // @ts-ignore: possibly null or undefined
    this.arrayOfOptionsRefs[index].focus();
    if (index !== this.currentOptionIndex) {
      // @ts-ignore: possibly null or undefined
      this.arrayOfOptionsRefs[this.currentOptionIndex].blur();
      this.currentOptionIndex = index;
    }
  };

  handleOptionsOnKeyDown = (e, index: number = 0, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    const len = this.arrayOfOptionsRefs.length - 1;
    switch (e.key) {
      case "Enter":
      case " ":
        if (typeof this.props.onChange === "function") {
          this.props.onChange(value);
        }
        this.toggleDropDown();
        // @ts-ignore
        this.selectFieldRef.current.focus();
        break;
      case "Escape":
        this.toggleDropDown();
        this.currentOptionIndex = 0;
        // @ts-ignore
        this.selectFieldRef.current.focus();
        break;
      case "ArrowUp":
        if (index > 0) {
          const nextIndex = index - 1;
          // @ts-ignore
          this.arrayOfOptionsRefs[nextIndex].focus();
          this.currentOptionIndex = nextIndex;
          // @ts-ignore
          this.arrayOfOptionsRefs[index].blur();
        }
        break;
      case "ArrowDown":
        if (len > index) {
          const previousIndex = index + 1;
          // @ts-ignore
          this.arrayOfOptionsRefs[previousIndex].focus();
          // @ts-ignore
          this.arrayOfOptionsRefs[this.currentOptionIndex].blur();
          this.currentOptionIndex = previousIndex;
        }
        break;
      default:
        return;
    }
  };

  handleKeyDown = e => {
    switch (e.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
        this.toggleDropDown();
        break;
      default:
        return;
    }
  };

  render() {
    const options = React.Children.toArray(this.props.children);
    const selectedOption = this.getSelectedOption(
      this.props.value,
      options as ReactElement[]
    );
    const selectedValue =
      selectedOption && selectedOption.props && selectedOption.props.value;

    const updatedChildren = React.Children.map(
      this.props.children,
      (child, index) =>
        React.cloneElement(child as ReactElement, {
          onChange: this.props.onChange,
          selectedValue,
          handleOptionsOnMouseOver: this.handleOptionsOnMouseOver,
          index,
          setOptionRef: this.setOptionRef,
          handleOptionsOnKeyDown: this.handleOptionsOnKeyDown
        })
    );

    return (
      <StyledSelectList
        className={this.props.className}
        onClick={this.toggleDropDown}
        onKeyDown={this.handleKeyDown}
        role="listbox"
      >
        {this.props.label && <label>{this.props.label}</label>}
        <SelectField tabIndex="0" ref={this.selectFieldRef}>
          {this.props.value}
        </SelectField>
        {this.state.isActive && <DropDown>{updatedChildren}</DropDown>}
      </StyledSelectList>
    );
  }
}

export default CustomSelect;
