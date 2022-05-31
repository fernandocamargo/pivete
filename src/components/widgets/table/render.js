import { forwardRef, useMemo } from "react";

import Column from "./column";
import Row from "./row";

export const renderRow = (column) => (
  <Column key={column.uuid.origin} {...column} />
);

export const renderRows = (rows, index) => (
  <Row key={index}>{rows.map(renderRow)}</Row>
);

export default forwardRef(({ className, columns, rows, settings }, ref) => {
  const { colSpan, rowSpan } = useMemo(
    () => ({
      colSpan: settings.rows.length - 1,
      rowSpan: settings.columns.length + 1,
    }),
    [settings]
  );

  return (
    <div className={className} ref={ref}>
      <table>
        <thead>
          <tr>
            <th colSpan={colSpan} rowSpan={rowSpan}>
              Rows
            </th>
            <th colSpan={columns.nodes}>Columns</th>
          </tr>
          {columns.tree.map(renderRows)}
        </thead>
        <tbody>{rows.tree.map(renderRows)}</tbody>
      </table>
    </div>
  );
});
