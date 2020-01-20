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

  return (
    <StyledOption className={props.className} onClick={handleClick}>
      {props.children || props.label}
    </StyledOption>
  );
};

Option.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};
Option.defaultProps = {
  label: null,
  className: undefined,
  onChange: undefined,
  selectedValue: undefined
};

export default Option;
