import use from "./hooks";
import { renderColumn } from "../render";

export default ({ children, className, ...props }) => {
  const { deep, value, values } = use(props);

  switch (true) {
    case !!children:
      return <td className={className}>{children}</td>;
    case deep:
      return values.map(renderColumn);
    default:
      return <td className={className}>{value}</td>;
  }
};
