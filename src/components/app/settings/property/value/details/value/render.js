/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback } from "react";

import { Checkbox } from "components/widgets/fields";

export const renderValue = (value, index) => <Value key={index} {...value} />;

export const Value = ({ checked, content, onChange, value }) => {
  const Wrapper = useCallback(
    ({ children }) =>
      !!Array.isArray(value) ? (
        <fieldset>
          <legend>{children}</legend>
          <details>
            <summary>See details</summary>
            <Checkbox>All</Checkbox>
            {value.map(renderValue)}
          </details>
        </fieldset>
      ) : (
        children
      ),
    [value]
  );

  return (
    <Wrapper>
      <Checkbox checked={checked} onChange={onChange}>
        {content}
      </Checkbox>
    </Wrapper>
  );
};

export default Value;
