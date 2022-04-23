/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import update from "immutability-helper";
import { useCallback, useEffect, useMemo, useState } from "react";

import { fetch, parse } from "./helpers";

export default () => {
  const [[data, records], persist] = useState([[], []]);
  const [settings] = useState({
    columns: ["year", "month", "dimension"],
    rows: ["office_id", "cc_level1", "cc_level2", "coa_level1"],
  });
  const formatted = useMemo(
    () => data.reduce(parse, { indexes: { fields: {}, values: {} } }),
    [data]
  );
  const merge = useCallback(
    (items, stack = { columns: [], rows: [] }, footprint = []) => {
      const reconcile = (stack, item, index) => {
        const deep = Array.isArray(item.value);
        const depth = {
          columns: settings.columns.indexOf(item.type),
          rows: settings.rows.indexOf(item.type),
        };
        const {
          true: [axis],
        } = {
          [!!~depth.columns]: ["columns"],
          [!!~depth.rows]: ["rows"],
        };
        const { [axis]: current } = stack;
        const path = footprint.concat(index);
        const uuid = path.join(".");
        const next = update(item, {
          deep: { $set: deep },
          path: { $set: path },
          uuid: { $set: uuid },
        });
        const value = Object.assign(stack, { [axis]: current.concat(next) });

        return deep ? merge(item.value, value, path) : value;
      };

      return items.reduce(reconcile, stack);
    },
    [settings]
  );
  const { columns, rows } = useMemo(() => merge(records), [merge, records]);

  useEffect(() => {
    fetch().then(persist);
  }, []);

  return { columns, data, formatted, rows, settings };
};
