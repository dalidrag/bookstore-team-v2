import React from "react";
declare type Props = {
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
    /** Callback prop to send data about pressed key to select list component */
    handleOptionsOnKeyDown?: Object;
};
declare const Option: React.FunctionComponent<Props>;
export default Option;
//# sourceMappingURL=Option.d.ts.map