import React, { ReactNodeArray } from "react";
import PropTypes from "prop-types";
declare type Props = {
    /** Writeup above the whole select widget */
    label?: string | null | undefined;
    /** Content of the select field */
    value: string;
    /** Function which handles the select event */
    onChange: Object;
    /** Needed to style the out-most element of the component */
    className: string | undefined;
};
declare type State = {
    /** Whether to render the drop-down */
    isActive: boolean;
};
declare class CustomSelect extends React.Component<Props, State> {
    static propTypes: {
        label: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
    };
    static defaultProps: {
        label: null;
        className: undefined;
        value: null;
    };
    state: {
        isActive: boolean;
    };
    getSelectedOption: (value: any, options?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[]) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
    toggleDropDown: () => void;
    arrayOfOptionsRefs: ReactNodeArray;
    setOptionRef: (element: any) => void;
    clearOptionsRefs: () => void;
    selectFieldRef: React.RefObject<"div">;
    currentOptionIndex: number;
    handleOptionsOnMouseOver: (e: any, index: any) => void;
    handleOptionsOnKeyDown: (e: any, index: number | undefined, value: string) => void;
    handleKeyDown: (e: any) => void;
    render(): JSX.Element;
}
export default CustomSelect;
//# sourceMappingURL=CustomSelect.d.ts.map