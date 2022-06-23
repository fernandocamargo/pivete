import { useMemo } from "react";

import use from "./hooks";
import { renderRow } from "../render";
import Column from "./column";

export const renderColumn = (cell, index) => <Column key={index} {...cell} />;

export default ({ details = [], values = [], content }) => {
  const { open, toggle } = use();
  const label = useMemo(() => `${open ? "Hide" : "See"} details`, [open]);

  return (
    <>
      <tr>
        <td>
          <dl>
            <dt>{content}</dt>
            <dd>
              {!!details.length && (
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
      {!!details.length && open && details.map(renderRow)}
    </>
  );
};
