/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { Checkbox } from "components/widgets/fields";

import { renderValue } from "../render";
import use from "./hooks";

export default ({ children, className, ...props }) => {
  const { nested, value } = use(props);

  return nested ? (
    <fieldset className={className}>
      <legend>{children}</legend>
      <details>
        <summary>See details</summary>
        <Checkbox>All</Checkbox>
        {value.map(renderValue)}
      </details>
    </fieldset>
  ) : (
    children
  );
};
