import Row from "./row";

export const renderRow = (row, index) => <Row key={index} {...row} />;

export default ({ className, rows }) => (
  <tbody className={className}>{rows.map(renderRow)}</tbody>
);
