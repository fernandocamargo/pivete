import { isUndefined } from "lodash";
import { useMemo } from "react";

export default ({ value, values }) => {
  const deep = useMemo(() => isUndefined(value), [value]);

  return { deep, value, values };
};
