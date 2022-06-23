import Column from "./column";

export const renderColumn = (column, index) => (
  <Column key={index} {...column} />
);

export default ({ details }) => <tr>{details.map(renderColumn)}</tr>;
