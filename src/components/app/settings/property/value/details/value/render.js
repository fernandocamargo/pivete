import { Checkbox } from "components/widgets/fields";

import Wrapper from "./wrapper";

export const renderValue = (value) => <Value key={value.uuid} {...value} />;

export const Value = ({ checked, content, onChange, value }) => (
  <Wrapper value={value}>
    <Checkbox checked={checked} onChange={onChange}>
      {content}
    </Checkbox>
  </Wrapper>
);

export default Value;
