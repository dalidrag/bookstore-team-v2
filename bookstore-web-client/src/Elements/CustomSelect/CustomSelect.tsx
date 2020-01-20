import React, { ReactElement } from "react";
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
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    const options = React.Children.toArray(this.props.children);
    const selectedOption = this.getSelectedOption(
      this.props.value,
      options as ReactElement[]
    );
    const selectedValue =
      selectedOption && selectedOption.props && selectedOption.props.value;

    const updatedChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child as ReactElement, {
        onChange: this.props.onChange,
        selectedValue
      })
    );

    return (
      <StyledSelectList
        className={this.props.className}
        onClick={this.toggleDropDown}
      >
        {this.props.label && <label>{this.props.label}</label>}
        <SelectField>{this.props.value}</SelectField>
        {this.state.isActive && <DropDown>{updatedChildren}</DropDown>}
      </StyledSelectList>
    );
  }
}

export default CustomSelect;
