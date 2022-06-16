import { useMemo } from "react";

export default ({ value }) => {
  const nested = useMemo(() => !!Array.isArray(value), [value]);

  return { nested, value };
};
