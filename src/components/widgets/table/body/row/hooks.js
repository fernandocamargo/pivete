import { useCallback, useMemo, useState } from "react";

import * as reducers from "./reducers";

export default ({ content, details, values }) => {
  const [{ open }, persist] = useState({ open: false });
  const deep = useMemo(() => !!details.length, [details.length]);
  const toggle = useCallback(
    (event) => [event.preventDefault(), persist(reducers.toggle())],
    []
  );

  return { content, deep, details, open, toggle, values };
};
