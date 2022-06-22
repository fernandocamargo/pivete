import use from "./hooks";

export default ({ children, className, ...props }) => {
  const { open, ref, summary } = use(props);

  return (
    <details className={className} open={open} ref={ref}>
      {!!summary && <summary>{summary}</summary>}
      {open && children}
    </details>
  );
};
