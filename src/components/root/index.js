/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

export const enhance = (component) => styled(component)`
  table {
    border: dotted 1px red;
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

export const serialize = (response) => response.json();

export default enhance(({ className }) => {
  const [data, setData] = useState([]);
  const formatted = useMemo(() => {
    const indexes = { indexes: { fields: {}, values: {} } };
    const parse = (stack, item, index) => {
      const group = ({ indexes }, [field, value], _index) => {
        return {
          indexes: {
            fields: Object.assign(indexes.fields, { [field]: _index }),
            values: Object.assign(indexes.values, {
              [field]: Object.assign(indexes.values?.[field] || {}, {
                [value]: (indexes.values?.[field]?.[value] || []).concat(index),
              }),
            }),
          },
        };
      };

      return Object.entries(item).reduce(group, stack);
    };

    return data.reduce(parse, indexes);
  }, [data]);

  useEffect(() => {
    const persist = (response) => setData(response.data);

    window.fetch("/assets/json/mock/data.json").then(serialize).then(persist);
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
            <th rowSpan={4}>Rows</th>
            <th colSpan={24}>Columns</th>
          </tr>
          <tr>
            <th colSpan={12}>2022</th>
            <th colSpan={12}>2021</th>
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
