/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback } from "react";

export default (props) => {
  const close = useCallback(
    (event) => [event.preventDefault(), props.close()],
    [props]
  );

  return { close };
};
