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
  /** Needed to style the out-most element of the component */
  className: string | undefined;
};

type State = {
  /** Whether to render the drop-down */
  isActive: boolean;
  value: string;
};

class CustomSelect extends React.Component<Props, State> {
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    label: null,
    className: undefined
  };

  state = {
    isActive: false,
    value: "Select field"
  };

  toggleDropDown = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  onChange = value => {
    this.setState(state => ({ value: value, isActive: !state.isActive }));
  };

  render() {
    const updatedChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child as ReactElement, {
        onChange: this.onChange
      })
    );

    return (
      <StyledSelectList
        className={this.props.className}
        onClick={this.toggleDropDown}
      >
        {this.props.label && <label>{this.props.label}</label>}
        <SelectField>{this.state.value}</SelectField>
        {this.state.isActive && <DropDown>{updatedChildren}</DropDown>}
      </StyledSelectList>
    );
  }
}

export default CustomSelect;
