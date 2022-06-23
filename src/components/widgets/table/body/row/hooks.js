import { useCallback, useState } from "react";

import * as reducers from "./reducers";

export default () => {
  const [{ open }, persist] = useState({ open: false });
  const toggle = useCallback(
    (event) => [event.preventDefault(), persist(reducers.toggle())],
    []
  );

  return { open, toggle };
};
