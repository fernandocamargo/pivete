import update from "immutability-helper";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { reverse } from "helpers/boolean";

import use from "./hooks";

export const HeadRow = ({ details = [] }) => {
  const Cell = useCallback(
    ({ content, nodes }) => <th colSpan={nodes}>{content}</th>,
    []
  );
  const renderCell = useCallback(
    (cell, index) => <Cell key={index} {...cell} />,
    []
  );

  return <tr>{details.map(renderCell)}</tr>;
};

export const BodyRow = ({ details = [], values = [], content }) => {
  const [{ open }, persist] = useState({ open: false });
  const reducers = useMemo(
    () => ({
      toggle: () => (state) => update(state, { open: { $apply: reverse } }),
    }),
    []
  );
  const label = useMemo(() => `${open ? "Hide" : "See"} details`, [open]);
  const renderCell = useCallback(
    (cell, index) => <Cell key={index} {...cell} />,
    []
  );
  const Cell = useCallback(
    ({ values = [], ...props }) => (
      <>
        {props.hasOwnProperty("value") ? (
          <td>{props.value}</td>
        ) : (
          values.map(renderCell)
        )}
      </>
    ),
    [renderCell]
  );
  const toggle = useCallback(
    (event) => [event.preventDefault(), persist(reducers.toggle())],
    [reducers]
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
      {!!details.length && open && details.map(renderBodyRow)}
    </>
  );
};

export const renderHeadRow = (row, index) => <HeadRow key={index} {...row} />;

export const renderBodyRow = (row, index) => <BodyRow key={index} {...row} />;

export default forwardRef(({ className, ...props }, ref) => {
  const { columns, rows, settings } = use(props);
  const { colSpan, rowSpan } = useMemo(
    () => ({
      colSpan: columns.nodes,
      rowSpan: settings.columns.length + 2,
    }),
    [columns.nodes, settings.columns]
  );

  return (
    <div className={className} ref={ref}>
      <table>
        <thead>
          <tr>
            <th rowSpan={rowSpan}>Rows</th>
            <th colSpan={colSpan}>Columns</th>
          </tr>
          {columns.tree.map(renderHeadRow)}
        </thead>
        <tbody>{rows.map(renderBodyRow)}</tbody>
      </table>
    </div>
  );
});
