import { Checkbox } from "components/widgets/fields";

import Wrapper from "./wrapper";

export default ({ className, checked, content, onChange, value }) => (
  <Wrapper className={className} value={value}>
    <Checkbox checked={checked} onChange={onChange}>
      {content}
    </Checkbox>
  </Wrapper>
);
