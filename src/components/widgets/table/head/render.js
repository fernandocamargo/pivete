import Row from "./row";

export const renderRow = (row, index) => <Row key={index} {...row} />;

export default ({ className, colSpan, columns, rowSpan }) => (
  <thead className={className}>
    <tr>
      <th rowSpan={rowSpan}>Rows</th>
      <th colSpan={colSpan}>Columns</th>
    </tr>
    {columns.tree.map(renderRow)}
  </thead>
);
