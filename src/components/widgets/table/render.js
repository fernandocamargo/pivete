import update from "immutability-helper";
import { forwardRef, useCallback, useMemo, useState } from "react";

import use from "./hooks";

/*
import Column from "./column";
import Row from "./row";

export const renderRow = (column) => (
  <Column key={column.uuid.origin} {...column} />
);

export const renderRows = (rows, index) => (
  <Row key={index}>{rows.map(renderRow)}</Row>
);
*/

export const reverse = (value) => !value;

export const reducers = {
  toggle: () => (state) => update(state, { open: { $apply: reverse } }),
};

export const Cell = ({ values = [], ...props }) => (
  <>
    {props.hasOwnProperty("value") && <td>{props.value}</td>}
    {values.map(renderCell)}
  </>
);

export const renderCell = (cell, index) => <Cell key={index} {...cell} />;

export const Row = ({ content, details = [], values = [] }) => {
  const [{ open }, persist] = useState({ open: false });
  const label = useMemo(() => `${open ? "Hide" : "See"} details`, [open]);
  const toggle = useCallback(
    (event) => [event.preventDefault(), persist(reducers.toggle())],
    []
  );

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
        {values.map(renderCell)}
      </tr>
      {!!details.length && open && details.map(renderRow)}
    </>
  );
};

export const renderRow = (row, index) => <Row key={index} {...row} />;

export default forwardRef(({ className, ...props }, ref) => {
  const { columns, rows } = use(props);

  /*
  const { colSpan, rowSpan } = useMemo(
    () => ({
      colSpan: settings.rows.length - 1,
      rowSpan: settings.columns.length + 1,
    }),
    [settings]
  );
  */

  return (
    <div className={className} ref={ref}>
      <table>
        <thead>
          <tr>
            <th>Rows</th>
            <th colSpan={13}>Columns</th>
          </tr>
        </thead>
        <tbody>{rows.map(renderRow)}</tbody>
      </table>
      {/*
        <thead>
          <tr>
            <th colSpan={colSpan} rowSpan={rowSpan}>
              Rows
            </th>
            <th colSpan={columns.nodes}>Columns</th>
          </tr>
          {columns.tree.map(renderRows)}
        </thead>
      */}
    </div>
  );
});
