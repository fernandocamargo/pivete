import { forwardRef } from "react";

export const Row = forwardRef(({ children }, ref) => (
  <tr ref={ref}>{children}</tr>
));

export const Column = forwardRef(({ content, nodes }, ref) => (
  <th colSpan={nodes} ref={ref}>
    {content}
  </th>
));

export const renderRow = (column) => (
  <Column key={column.uuid.origin} {...column} />
);

export const renderRows = (rows, index) => (
  <Row key={index}>{rows.map(renderRow)}</Row>
);

export default forwardRef(({ className, columns }, ref) => (
  <table className={className} ref={ref}>
    <thead>
      <tr>
        <th rowSpan={4}>Rows</th>
        <th colSpan={columns.nodes}>Columns</th>
      </tr>
      {columns.tree.map(renderRows)}
    </thead>
  </table>
));
