import { useMemo } from "react";

import use from "./hooks";
import { renderRow } from "../render";
import Column from "./column";

export const renderColumn = (cell, index) => <Column key={index} {...cell} />;

export default ({ className, ...props }) => {
  const { content, deep, depth, details, open, toggle, values } = use(props);
  const label = useMemo(() => `${open ? "Hide" : "See"} details`, [open]);
  const code = useMemo(() => content.at(0), [content]);

  return (
    <>
      <tr aria-expanded={open} className={className}>
        <Column depth={depth}>
          <a href="/" onClick={toggle} title={label}>
            <dfn aria-label={code}>{content}</dfn>
          </a>
        </Column>
        {values.map(renderColumn)}
      </tr>
      {deep && open && details.map(renderRow)}
    </>
  );
};
