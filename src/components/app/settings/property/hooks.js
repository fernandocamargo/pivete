/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback } from "react";

export default ({ modal: { open }, content, details }) => {
  const create = useCallback(
    (event) => [event.preventDefault(), open()],
    [open]
  );

  return { content, create, details };
};
