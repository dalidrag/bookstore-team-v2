import React from "react";
import PropTypes from "prop-types";

type Props = {
  /** Text that will be shown in this list item */
  label?: string | null | undefined;
  /** String that will become the content of select field if this list item is selected */
  value: string;
  /** Needed to style the out-most element of the component */
  className?: string | undefined;
};

const Option: React.FunctionComponent<Props> = props => {
  return <li className={props.className}>{props.children || props.label}</li>;
};
Option.displayName = "Option";

Option.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  className: PropTypes.string
};
Option.defaultProps = {
  label: null,
  className: undefined
};

export default Option;
