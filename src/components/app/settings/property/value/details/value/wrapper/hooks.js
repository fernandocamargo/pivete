/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useMemo } from "react";

export default ({ value }) => {
  const nested = useMemo(() => !!Array.isArray(value), [value]);

  return { nested, value };
};
