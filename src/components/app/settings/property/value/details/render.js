import { Details } from "components/widgets";

import Self from ".";
import { renderValue } from "./value/render";

export const renderDetails = (details, index) => (
  <Self key={index} {...details} />
);

export default ({ content, details, value }) => (
  <Details summary={content}>
    {details.map(renderDetails)}
    {value.map(renderValue)}
  </Details>
);
