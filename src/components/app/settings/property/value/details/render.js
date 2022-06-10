/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { renderValue } from "./value/render";

export const renderDetails = (details, index) => (
  <Details key={index} {...details} />
);

export const Details = ({ content, details, value }) => (
  <details>
    <summary>{content}</summary>
    {details.map(renderDetails)}
    {value.map(renderValue)}
  </details>
);

export default Details;
