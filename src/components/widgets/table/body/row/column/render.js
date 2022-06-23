import use from "./hooks";
import { renderColumn } from "../render";

export default (props) => {
  const { deep, value, values } = use(props);

  return deep ? values.map(renderColumn) : <td>{value}</td>;
};
