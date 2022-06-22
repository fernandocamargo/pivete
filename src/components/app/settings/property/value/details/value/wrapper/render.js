import { Details } from "components/widgets";
import { Checkbox } from "components/widgets/fields";

import { renderValue } from "../render";
import use from "./hooks";

export default ({ children, className, ...props }) => {
  const { nested, value } = use(props);

  return nested ? (
    <fieldset className={className}>
      <legend>{children}</legend>
      <Details summary="See details">
        <Checkbox>All</Checkbox>
        {value.map(renderValue)}
      </Details>
    </fieldset>
  ) : (
    children
  );
};
