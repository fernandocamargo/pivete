/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import random from "lodash/random";
import { useCallback, useEffect, useMemo, useState } from "react";
import Table from "react-pivottable/PivotTableUI";
import { aggregatorTemplates } from "react-pivottable/Utilities";
import "react-pivottable/pivottable.css";

export const cols = ["year", "month", "itemtype"];

export const rows = ["cc_level1", "cc_level2"];

export const serialize = (response) => response.json();

export default () => {
  const [data, setData] = useState();
  const [settings, setSettings] = useState();
  const aggregators = useMemo(
    () => ({
      budget: function () {
        return function (...params) {
          console.log("lol", { params }, this);

          return {
            count: 0,
            push: function (record) {
              this.count++;
            },
            value: function () {
              return this.count;
            },
            format: function (x) {
              return x;
            },
          };
        };
      },
    }),
    []
  );
  const derivedAttributes = useMemo(
    () => ({ budget_vs_forecast: () => random(1, 1000) }),
    []
  );
  const onChange = useCallback((event) => setSettings(event), []);

  useEffect(() => {
    const persist = (response) => setData(response.data);

    window.fetch("/assets/json/mock/data.json").then(serialize).then(persist);
  }, []);

  return data ? (
    <Table
      aggregatorName="budget"
      aggregators={aggregators}
      cols={cols}
      data={data}
      derivedAttributes={derivedAttributes}
      onChange={onChange}
      rows={rows}
      {...settings}
    />
  ) : (
    "Loading..."
  );
};
