/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import state from "./mock";
import { fetch } from "./helpers";
import { Columns, Rows } from "./parsers";

export default () => {
  const ref = useRef();
  // const [records, persist] = useState({ columns: [], rows: [] });
  const [records] = useState(state);
  const [settings] = useState({
    columns: ["year", "month", "itemtype"],
    rows: ["office_id", "cc_level1", "transaction_value"],
  });
  const format = useCallback(
    ({ columns, rows }) => ({
      columns: new Columns(settings).scan(columns),
      rows: new Rows(settings).scan(rows),
    }),
    [settings]
  );
  const recordset = useMemo(() => format(records), [format, records]);
  const ready = useMemo(
    () => !!records.columns.length || !!records.rows.length,
    [records]
  );

  useEffect(() => {
    // fetch({ settings }).then(persist);
    fetch({ settings });
  }, [settings]);

  return { ready, ref, settings, ...recordset };
};
