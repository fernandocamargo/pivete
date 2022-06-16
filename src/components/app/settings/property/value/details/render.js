import Details from ".";
import { renderValue } from "./value/render";

export const renderDetails = (details, index) => (
  <Details key={index} {...details} />
);

export default ({ content, details, open, value }) => (
  <details open={open}>
    <summary>{content}</summary>
    {details.map(renderDetails)}
    {value.map(renderValue)}
  </details>
);
