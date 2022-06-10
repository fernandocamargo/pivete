/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import data from "./mock";
import { Columns, Rows } from "./parsers";
import * as reducers from "./reducers";

export default ({ modal: { open, close } }) => {
  const ref = useRef();
  // const [records, persist] = useState({ columns: [], rows: [] });
  const [{ records, settings }, set] = useState({
    settings: {
      columns: ["year", "month", "itemtype"],
      rows: ["cc_level1", "office_id", "transaction_value"],
    },
    records: { columns: [], rows: [] },
  });
  const format = useCallback(
    ({ columns, rows }) => ({
      columns: new Columns(settings).scan(columns),
      rows: new Rows(settings).scan(rows),
    }),
    [settings]
  );
  const recordset = useMemo(() => format(records), [format, records]);
  const empty = useMemo(
    () => !records.columns.length && !records.rows.length,
    [records]
  );
  const configure = useCallback(
    (event) => [event.preventDefault(), open()],
    [open]
  );
  const fetch = useCallback(() => Promise.resolve(data), []);

  useEffect(() => {
    const persist = (data) => set(reducers.set(data));
    const stale = !!settings.columns.length || !!settings.rows.length;

    return void (stale && fetch({ settings }).then(persist));
  }, [fetch, settings]);

  return { close, configure, empty, open, ref, settings, ...recordset };
};
