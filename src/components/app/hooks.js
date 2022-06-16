import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import data from "./mock";
// import { Columns, Rows } from "./parsers";
import * as reducers from "./reducers";

export default ({ modal: { open, close } }) => {
  const ref = useRef();
  // const [records, persist] = useState({ columns: [], rows: [] });
  const [{ settings, ...state }, persist] = useState({
    records: { columns: [], rows: [] },
    settings: {
      columns: [{ type: "year", value: [] }],
      rows: [
        {
          content: "Office ID",
          type: "office_id",
          value: [
            {
              content: "7be5f650-6db1-42ab-b842-b16dd990cdbd",
              value: "7be5f650-6db1-42ab-b842-b16dd990cdbd",
            },
          ],
        },
        { content: "CC Level 1", type: "cc_level1", value: [] },
        {
          content: "CC Level 3",
          type: "cc_level3",
          value: [
            {
              content: "4310 Mgmt Customer Success",
              value: "4310 Mgmt Customer Success",
            },
            { content: null, value: null },
            { content: "4140 Events & Messen", value: "4140 Events & Messen" },
          ],
        },
        {
          content: "Month",
          type: "month",
          value: [
            { content: "02", value: "02" },
            { content: "03", value: "03" },
          ],
        },
      ],
      values: [
        {
          content: "Item type",
          type: "itemtype",
          value: [
            { content: "Actual", value: "Actual" },
            { content: "Forecast", value: "Forecast" },
          ],
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
  const recordset = useMemo(
    () => format(state.records),
    [state.records, format]
  );
  const empty = useMemo(
    () => !state.records.columns.length && !state.records.rows.length,
    [state.records]
  );
  const configure = useCallback(
    (event) => [event.preventDefault(), open()],
    [open]
  );
  const toggle = useCallback(
    ({ item, path }) => persist(reducers.toggle({ item, path })),
    []
  );
  const fetch = useCallback(() => Promise.resolve(data), []);

  useEffect(() => {
    const load = (records) => persist(reducers.load({ records }));
    const stale = !!settings.columns.length || !!settings.rows.length;

    return void (stale && fetch({ settings }).then(load));
  }, [fetch, settings]);

  return { close, configure, empty, open, ref, settings, toggle, ...recordset };
};
