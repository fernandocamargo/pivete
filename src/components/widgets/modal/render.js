import use from "./hooks";

export default ({ children, ...props }) => {
  const skip = use(props);

  return skip || children;
};
