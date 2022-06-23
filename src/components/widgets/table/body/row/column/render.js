import { renderColumn } from "../render";

export default ({ values = [], ...props }) => (
  <>
    {props.hasOwnProperty("value") ? (
      <td>{props.value}</td>
    ) : (
      values.map(renderColumn)
    )}
  </>
);
