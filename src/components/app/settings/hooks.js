/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback } from "react";

export default () => {
  const close = useCallback(
    (event) => [event.preventDefault(), console.log("close();")],
    []
  );
  const create = useCallback(
    (event) => [event.preventDefault(), console.log("create();")],
    []
  );

  return { close, create };
};
