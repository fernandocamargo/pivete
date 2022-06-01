/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import use from "./hooks";

export default ({ children, ...props }) => {
  const skip = use(props);

  return skip || children;
};
