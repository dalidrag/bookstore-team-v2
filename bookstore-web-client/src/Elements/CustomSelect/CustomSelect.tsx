import React from "react";
import PropTypes from "prop-types";

type Props = {
  /** Writeup above the whole select widget */
  label?: string | null | undefined;
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
    className: PropTypes.string
  };

  static defaultProps = {
    label: null,
    className: undefined
  };

  state = {
    isActive: false
  };

  toggleDropDown = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    return (
      <div className={this.props.className} onClick={this.toggleDropDown}>
        {this.props.label && <label>{this.props.label}</label>}
        <div>Select field</div>
        {this.state.isActive && <ul>{this.props.children}</ul>}
      </div>
    );
  }
}

export default CustomSelect;
