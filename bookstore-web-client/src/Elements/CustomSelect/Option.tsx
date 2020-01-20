import React from "react";
import PropTypes from "prop-types";

type Props = {
  /** Text that will be shown in this list item */
  label?: string | null | undefined;
  /** String that will become the content of select field if this list item is selected */
  value: string;
  /** Needed to style the out-most element of the component */
  className?: string | undefined;
  /** Callback prop to react on option selection */
  onChange?: Object;
};

const Option: React.FunctionComponent<Props> = props => {
  const handleClick = e => {
    if (typeof props.onChange === "function") {
      e.stopPropagation();
      props.onChange(props.value);
    }
  };

  return (
    <li className={props.className} onClick={handleClick}>
      {props.children || props.label}
    </li>
  );
};

Option.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func
};
Option.defaultProps = {
  label: null,
  className: undefined,
  onChange: undefined
};

export default Option;
