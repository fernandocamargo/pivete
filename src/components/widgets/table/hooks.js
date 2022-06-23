import isArray from "lodash/isArray";
import update from "immutability-helper";
import { useMemo } from "react";

import { calculate, index, situate } from "./helpers";

export default ({ settings, ...props }) => {
  const indexes = useMemo(
    () =>
      Object.entries({
        columns: settings.columns.concat(settings.values),
        rows: settings.rows,
      }).reduce(situate, {}),
    [settings]
  );
  const columns = useMemo(() => {
    const reconcile = (current, { content, type, ...column }) => {
      const {
        columns: { [type]: index },
      } = indexes;
      const { nodes, tree } = iterate(column.details, {
        nodes: 0,
        tree: current.tree,
      });
      const increment = (value = 0) => value + Math.max(nodes, 1);
      const concat = (fragments = { details: [] }) => ({
        details: fragments.details.concat({ content, nodes, type }),
      });
      const resolve = () => update(tree, { [index]: { $apply: concat } });

      return update(current, {
        nodes: { $apply: increment },
        tree: { $apply: resolve },
      });
    };
    const iterate = (input, output = { tree: [], nodes: 0 }) =>
      isArray(input) ? input.reduce(reconcile, output) : output;

    return iterate(props.columns);
  }, [props.columns, indexes]);
  const rows = useMemo(() => {
    const reconcile = (row) => {
      const details = row?.details?.map(reconcile);
      const values = calculate(props.columns, index(row.values));

      return update(row, {
        details: { $set: details },
        values: { $set: values },
      });
    };

    return props.rows.map(reconcile, []);
  }, [props.columns, props.rows]);

  return { columns, rows, settings };
};
