import random from "lodash/random";
import { useCallback, useEffect, useMemo, useState } from "react";
import Table from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";

export const serialize = (response) => response.json();

export default () => {
  const [data, setData] = useState();
  const [settings, setSettings] = useState();
  const derivedAttributes = useMemo(
    () => ({
      "Budget vs. Forecast": () => random(1, 1000),
    }),
    []
  );
  const onChange = useCallback((event) => setSettings(event), []);

  useEffect(() => {
    const persist = (response) => setData(response.data);

    window.fetch("/assets/json/mock/data.json").then(serialize).then(persist);
  }, []);

  return data ? (
    <Table
      data={data}
      derivedAttributes={derivedAttributes}
      onChange={onChange}
      {...settings}
    />
  ) : (
    "Loading..."
  );
};
