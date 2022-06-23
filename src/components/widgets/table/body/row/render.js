import { useMemo } from "react";

import use from "./hooks";
import { renderRow } from "../render";
import Column from "./column";

export const renderColumn = (cell, index) => <Column key={index} {...cell} />;

export default (props) => {
  const { content, deep, details, open, toggle, values } = use(props);
  const label = useMemo(() => `${open ? "Hide" : "See"} details`, [open]);

  return (
    <>
      <tr>
        <td>
          <dl>
            <dt>{content}</dt>
            <dd>
              {deep && (
                <nav>
                  <h4>Actions:</h4>
                  <ul>
                    <li>
                      <a href="/" onClick={toggle} title={label}>
                        {label}
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </dd>
          </dl>
        </td>
        {values.map(renderColumn)}
      </tr>
      {deep && open && details.map(renderRow)}
    </>
  );
};
