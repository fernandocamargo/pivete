/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { fetch } from "./helpers";
import { Columns, Rows } from "./parsers";

export default () => {
  const ref = useRef();
  const [[state, records], persist] = useState([[], { columns: [], rows: [] }]);
  const [settings] = useState({
    columns: ["year", "month", "itemtype"],
    rows: ["office_id", "cc_level1"],
  });
  const format = useCallback(
    ({ columns, rows }) => ({
      columns: new Columns(settings).scan(columns),
      rows: new Rows(settings).scan(rows),
    }),
    [settings]
  );
  const recordset = useMemo(() => format(records), [format, records]);
  const ready = useMemo(() => !!state.length, [state]);

  useEffect(() => {
    fetch().then(persist);
  }, []);

  return { ready, ref, settings, ...recordset };
};
