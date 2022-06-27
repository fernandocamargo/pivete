import { Details as Wrapper } from "components/widgets";

import Details from ".";
import Value from "./value";

export const renderDetails = (details, index) => (
  <Details key={index} {...details} />
);

export const renderValue = (value) => <Value key={value.uuid} {...value} />;

export default ({ className, content, details, value }) => (
  <Wrapper className={className} summary={content}>
    {details.map(renderDetails)}
    {value.map(renderValue)}
  </Wrapper>
);
