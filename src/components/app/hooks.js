/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import data from "./mock";
// import { Columns, Rows } from "./parsers";
import * as reducers from "./reducers";

export default ({ modal: { open, close } }) => {
  const ref = useRef();
  // const [records, persist] = useState({ columns: [], rows: [] });
  const [{ records, settings }, set] = useState({
    records: { columns: [], rows: [] },
    settings: {
      columns: [{ type: "year", value: [] }],
      rows: [
        {
          type: "office_id",
          value: [{ value: "7be5f650-6db1-42ab-b842-b16dd990cdbd" }],
        },
        {
          type: "cc_level1",
          value: [{ value: "CEO" }],
        },
        { type: "cc_level2", value: [] },
        { type: "cc_level3", value: [{ value: "4310 Mgmt Customer Success" }] },
        { type: "month", value: [{ value: "02" }, { value: "03" }] },
      ],
      values: [
        {
          type: "itemtype",
          value: [{ value: "Actual" }, { value: "Forecast" }],
        },
      ],
    },
  });
  const format = useCallback(
    ({ columns, rows }) => ({
      // columns: new Columns(settings).scan(columns),
      // rows: new Rows(settings).scan(rows),
    }),
    // [settings]
    []
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
  const toggle = useCallback(
    ({ item, path }) => console.log("toggle();", { item, path }),
    []
  );
  const fetch = useCallback(() => Promise.resolve(data), []);

  useEffect(() => {
    const persist = (data) => set(reducers.set(data));
    const stale = !!settings.columns.length || !!settings.rows.length;

    console.log("fetch();", settings);

    return void (stale && fetch({ settings }).then(persist));
  }, [fetch, settings]);

  return { close, configure, empty, open, ref, settings, toggle, ...recordset };
};
