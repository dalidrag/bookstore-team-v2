import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

type Props = {
  /** Text that will be shown in this list item */
  label?: string | null | undefined;
  /** String that will become the content of select field if this list item is selected */
  value: string;
  /** Currently selected value */
  selectedValue?: string;
  /** Needed to style the out-most element of the component */
  className?: string | undefined;
  /** Callback prop to react on option selection */
  onChange?: Object;
  /** Callback prop to focus option element on mouse over */
  handleOptionsOnMouseOver?: Object;
  /** Index of this option element in select list */
  index?: number;
  /** Callback prop to send option ref to select list component */
  setOptionRef?: Object;
};

const Option: React.FunctionComponent<Props> = props => {
  const isSelected = props.value === props.selectedValue;

  const StyledOption = styled.li`
    background-color: ${isSelected ? "lightblue" : "white"};
    border-bottom: 1px solid lightblue;
    padding: 3px;
    user-select: none;
  `;

  const handleClick = () => {
    if (typeof props.onChange === "function") {
      // e.stopPropagation();
      props.onChange(props.value);
    }
  };

  const handleMouseOver = e => {
    if (typeof props.handleOptionsOnMouseOver === "function") {
      props.handleOptionsOnMouseOver(e, props.index);
    }
  };

  return (
    <StyledOption
      tabIndex="0"
      className={props.className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      ref={props.setOptionRef}
    >
      {props.children || props.label}
    </StyledOption>
  );
};

Option.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  handleOptionsOnMouseOver: PropTypes.func,
  setOptionRef: PropTypes.func,
  index: PropTypes.number
};
Option.defaultProps = {
  label: null,
  className: undefined,
  onChange: undefined,
  selectedValue: undefined,
  handleOptionsOnMouseOver: undefined,
  setOptionRef: undefined,
  index: -1
};

export default Option;
