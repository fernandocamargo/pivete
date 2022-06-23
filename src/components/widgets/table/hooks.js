import isArray from "lodash/isArray";
import update from "immutability-helper";
import { useMemo } from "react";

import { calculate, index, situate } from "./helpers";

export default (props) => {
  const indexes = useMemo(() => {
    const settings = {
      columns: props.settings.columns.concat(props.settings.values),
      rows: props.settings.rows,
    };

    return Object.entries(settings).reduce(situate, {});
  }, [props.settings]);
  const columns = useMemo(() => {
    /*
    const reconcile = (stack, { content, type, ...column }) => {
      const {
        columns: { [type]: index },
      } = indexes;
      const details = column?.details?.reduce(reconcile, stack);
      const concat = (collection = []) =>
        collection.concat({ content, details, type });

      return update(stack, { [index]: { $apply: concat } });
    };

    return props.columns.reduce(reconcile, []);
    */

    const reconcile = (stack, { content, type, ...column }) => {
      const {
        columns: { [type]: index },
      } = indexes;
      const details = iterate(column.details);
      const concat = (collection = []) =>
        collection.concat({ content, details, type });

      return update(stack, { [index]: { $apply: concat } });
    };
    const iterate = (input, output = []) =>
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

  return { columns, rows };
};
