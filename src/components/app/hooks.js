import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import data from "./mock";
// import { Columns, Rows } from "./parsers";
import * as reducers from "./reducers";

export default ({ modal: { open, close } }) => {
  const ref = useRef();
  // const [records, persist] = useState({ columns: [], rows: [] });
  const [{ properties, settings, ...state }, persist] = useState({
    settings: {
      columns: [],
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
        {
          content: "CC Level 1",
          type: "cc_level1",
          value: [
            {
              content: "General & Administrative",
              value: "General & Administrative",
            },
          ],
        },
        {
          content: "CC Level 2",
          type: "cc_level2",
          value: [],
        },
        {
          content: "CC Level 3",
          type: "cc_level3",
          value: [
            { content: "RevOps", value: "RevOps" },
            { content: null, value: null },
            { content: "Sales", value: "Sales" },
          ],
        },
        {
          content: "Account",
          type: "account",
          value: [{ content: 54000, value: 54000 }],
        },
        {
          content: "Month",
          type: "month",
          value: [
            { content: 2, value: 2 },
            { content: 3, value: 3 },
          ],
        },
      ],
      values: [
        {
          content: "Item type",
          type: "itemtype",
          value: [
            { content: "Actual", value: "actual" },
            { content: "Forecast", value: "forecast" },
            { content: "Delta (%)", value: "actual / forecast" },
          ],
        },
      ],
    },
    records: { columns: [], rows: [] },
    properties: [],
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
  const toggle = useCallback((params) => persist(reducers.toggle(params)), []);
  const fetch = useCallback(() => Promise.resolve(data), []);

  useEffect(() => {
    const load = (records) => persist(reducers.load({ records }));
    const stale = !!settings.columns.length || !!settings.rows.length;

    return void (stale && fetch({ settings }).then(load));
  }, [fetch, settings]);

  return {
    close,
    configure,
    empty,
    open,
    properties,
    ref,
    settings,
    toggle,
    ...recordset,
  };
};
