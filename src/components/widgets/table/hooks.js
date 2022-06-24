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
    const reconcile = (stack, { content, type, ...column }) => {
      const {
        columns: { [type]: index },
      } = indexes;
      const depth = stack.depth + 1;
      const { nodes, tree } = iterate(column.details, {
        nodes: 0,
        tree: stack.tree,
        depth,
      });
      const increment = (value = 0) => value + Math.max(nodes, 1);
      const concat = (fragments = { details: [] }) => ({
        details: fragments.details.concat({ content, depth, nodes, type }),
      });
      const resolve = () => update(tree, { [index]: { $apply: concat } });

      return update(stack, {
        nodes: { $apply: increment },
        tree: { $apply: resolve },
      });
    };
    const iterate = (input, output = { depth: 0, nodes: 0, tree: [] }) =>
      isArray(input) ? input.reduce(reconcile, output) : output;

    return iterate(props.columns);
  }, [props.columns, indexes]);
  const rows = useMemo(() => {
    const reconcile = (stack, { content, type, ...row }) => {
      const depth = stack.depth + 1;
      const details = row?.details?.reduce(reconcile, {
        tree: [],
        depth,
      })?.tree;
      const values = calculate(props.columns, index(row.values));

      return update(stack, {
        tree: { $push: [{ content, depth, details, type, values }] },
      });
    };

    return props.rows.reduce(reconcile, { depth: 0, tree: [] });
  }, [props.columns, props.rows]);
  const { colSpan, rowSpan } = useMemo(
    () => ({
      colSpan: columns.nodes,
      rowSpan: settings.columns.length + 2,
    }),
    [columns.nodes, settings.columns]
  );

  return { body: { rows }, head: { columns, colSpan, rowSpan } };
};
