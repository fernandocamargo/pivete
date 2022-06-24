import { useCallback, useMemo } from "react";

export default ({ modal: { open }, content, details, selection }) => {
  const deep = useMemo(() => !!details.length, [details.length]);
  const create = useCallback(
    (event) => [event.preventDefault(), open()],
    [open]
  );

  return { content, create, deep, details, selection };
};
