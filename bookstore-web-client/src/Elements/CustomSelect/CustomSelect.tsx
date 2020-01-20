import React, { ReactElement } from "react";
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
      <div className={this.props.className} onClick={this.toggleDropDown}>
        {this.props.label && <label>{this.props.label}</label>}
        <div>{this.state.value}</div>
        {this.state.isActive && <ul>{updatedChildren}</ul>}
      </div>
    );
  }
}

export default CustomSelect;
