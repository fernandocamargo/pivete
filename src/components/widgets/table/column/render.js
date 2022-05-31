import gt from "lodash/gt";
import { createElement, forwardRef, useMemo } from "react";

export default forwardRef(
  ({ content: children, head, nodes, roledescription }, ref) => {
    const { attributes, type } = useMemo(
      () => ({
        attributes: {
          ...(head && !!nodes && { colSpan: nodes }),
          ...(!head && gt(nodes, 1) && { rowSpan: nodes }),
        },
        type: head ? "th" : "td",
      }),
      [head, nodes]
    );

    return createElement(type, {
      ...(roledescription && { "aria-roledescription": roledescription }),
      children,
      ref,
      ...attributes,
    });
  }
);
