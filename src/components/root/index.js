/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { property } from "lodash";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { serialize } from "./helpers";

export const enhance = (component) => styled(component)`
  table {
    border: dotted 1px red;
    width: 100%;
  }

  td,
  th {
    border: dotted 1px blue;
  }

  div {
    display: flex;
  }

  pre {
    font-size: 0.75rem;
    width: 50%;
  }
`;

export default enhance(({ className }) => {
  const [[data], persist] = useState([[]]);
  const formatted = useMemo(() => {
    const indexes = { indexes: { fields: {}, values: {} } };
    const parse = (stack, item, index) => {
      const group = (stack, [name, value], _index) => {
        const current = stack.indexes.values?.[name] || {};
        const collection = current?.[value] || [];
        const next = collection.concat(index);

        return {
          indexes: {
            fields: Object.assign(stack.indexes.fields, { [name]: _index }),
            values: Object.assign(stack.indexes.values, {
              [name]: Object.assign(current, { [value]: next }),
            }),
          },
        };
      };

      return Object.entries(item).reduce(group, stack);
    };

    return data.reduce(parse, indexes);
  }, [data]);

  useEffect(() => {
    Promise.all([
      window
        .fetch("/assets/json/mock/data.json")
        .then(serialize)
        .then(property("data")),
      import("./mock").then(property("default")),
    ]).then(persist);
  }, []);

  return data ? (
    <div className={className}>
      <form>
        <fieldset>
          <legend>Settings</legend>
        </fieldset>
      </form>
      <table>
        <thead>
          <tr>
            <th colSpan={3} rowSpan={4}>
              Rows
            </th>
            <th colSpan={24}>Columns</th>
          </tr>
          <tr>
            <th colSpan={12}>2021</th>
            <th colSpan={12}>2022</th>
          </tr>
          <tr>
            <th colSpan={3}>Jan</th>
            <th colSpan={3}>Feb</th>
            <th colSpan={3}>Mar</th>
            <th colSpan={3}>Apr</th>
            <th colSpan={3}>Jan</th>
            <th colSpan={3}>Feb</th>
            <th colSpan={3}>Mar</th>
            <th colSpan={3}>Apr</th>
          </tr>
          <tr>
            <th>Actual</th>
            <th>Budget</th>
            <th>Delta %</th>
            <th>Actual</th>
            <th>Budget</th>
            <th>Delta %</th>
            <th>Actual</th>
            <th>Budget</th>
            <th>Delta %</th>
            <th>Actual</th>
            <th>Budget</th>
            <th>Delta %</th>
            <th>Actual</th>
            <th>Budget</th>
            <th>Delta %</th>
            <th>Actual</th>
            <th>Budget</th>
            <th>Delta %</th>
            <th>Actual</th>
            <th>Budget</th>
            <th>Delta %</th>
            <th>Actual</th>
            <th>Budget</th>
            <th>Delta %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={9}>Berlin</td>
            <td rowSpan={3}>Sales</td>
            <td>Customer Success</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Retention</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Leads</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td rowSpan={3}>Marketing</td>
            <td>SEO</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Social Media</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Branding</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td rowSpan={3}>Finance</td>
            <td>RH</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Accounting</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Operations</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td rowSpan={9}>São Paulo</td>
            <td rowSpan={3}>Sales</td>
            <td>Customer Success</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Retention</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Leads</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td rowSpan={3}>Marketing</td>
            <td>SEO</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Social Media</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Branding</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td rowSpan={3}>Finance</td>
            <td>RH</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Accounting</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Operations</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
            <td>322,380</td>
            <td>122,380</td>
            <td>60%</td>
          </tr>
        </tbody>
      </table>
      <div>
        <pre>{JSON.stringify(data, null, 1)}</pre>
        <pre>{JSON.stringify(formatted, null, 1)}</pre>
      </div>
    </div>
  ) : (
    "Loading..."
  );
});
