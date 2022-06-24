import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import * as reducers from "./reducers";

export default ({ modal: { open, close } }) => {
  const ref = useRef();
  const [{ properties, settings, table }, persist] = useState({
    settings: {
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
        { content: "CC Level 1", type: "coa_level1", value: [] },
        { content: "CC Level 2", type: "coa_level2", value: [] },
      ],
      columns: [
        { content: "Year", type: "year", value: [] },
        { content: "Month", type: "month", value: [] },
      ],
      values: [
        {
          content: "Item type",
          type: "itemtype",
          value: [
            { content: "Actual", value: "Actual" },
            { content: "Forecast", value: "forecast" },
            {
              content: "Delta (%)",
              value: { delta: { "Actual vs. Budget": ["Delta (%)"] } },
            },
            {
              content: "Delta (absolute)",
              value: { delta: { "Actual vs. Budget": ["Delta (absolute)"] } },
            },
          ],
        },
      ],
    },
    table: {
      columns: [
        {
          content: 2021,
          type: "year",
          details: [
            {
              content: 1,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 2,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 3,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 4,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 5,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 6,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 7,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 8,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 9,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 10,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 11,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 12,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
            },
          ],
        },
        {
          content: 2022,
          type: "year",
          details: [
            {
              content: 1,
              type: "month",
              details: [
                { content: "Actual", type: "itemtype" },
                { content: "forecast", type: "itemtype" },
              ],
            },
            {
              content: 2,
              type: "month",
              details: [
                { content: "Actual", type: "itemtype" },
                { content: "forecast", type: "itemtype" },
              ],
            },
            {
              content: 3,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 4,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 5,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 6,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 7,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 8,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 9,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 10,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 11,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 12,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
          ],
        },
        {
          content: 2023,
          type: "year",
          details: [
            {
              content: 1,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 2,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 3,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 4,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 5,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 6,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 7,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 8,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 9,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 10,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 11,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 12,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
          ],
        },
        {
          content: 2024,
          type: "year",
          details: [
            {
              content: 1,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 2,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 3,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 4,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 5,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 6,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 7,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 8,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 9,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 10,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 11,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 12,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
          ],
        },
        {
          content: 2025,
          type: "year",
          details: [
            {
              content: 1,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 2,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 3,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 4,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 5,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 6,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 7,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 8,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 9,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 10,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 11,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 12,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
          ],
        },
        {
          content: 2026,
          type: "year",
          details: [
            {
              content: 1,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 2,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 3,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 4,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 5,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 6,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 7,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 8,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 9,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 10,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 11,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
            {
              content: 12,
              type: "month",
              details: [{ content: "forecast", type: "itemtype" }],
            },
          ],
        },
      ],
      rows: [
        {
          content: "b1060606c7f34749bf4fadb84885ebcd",
          type: "office_id",
          values: [
            {
              type: "year",
              content: 2021,
              values: [
                {
                  type: "month",
                  content: 1,
                  values: [
                    { type: "itemtype", content: "Actual", value: -5941408.8 },
                  ],
                },
                {
                  type: "month",
                  content: 2,
                  values: [
                    { type: "itemtype", content: "Actual", value: 33144.98 },
                  ],
                },
                {
                  type: "month",
                  content: 3,
                  values: [
                    { type: "itemtype", content: "Actual", value: 45476.77 },
                  ],
                },
                {
                  type: "month",
                  content: 4,
                  values: [
                    { type: "itemtype", content: "Actual", value: 39021.33 },
                  ],
                },
                {
                  type: "month",
                  content: 5,
                  values: [
                    { type: "itemtype", content: "Actual", value: -4293.4 },
                  ],
                },
                {
                  type: "month",
                  content: 6,
                  values: [
                    { type: "itemtype", content: "Actual", value: 102713.14 },
                  ],
                },
                {
                  type: "month",
                  content: 7,
                  values: [
                    { type: "itemtype", content: "Actual", value: 43932.6 },
                  ],
                },
                {
                  type: "month",
                  content: 8,
                  values: [
                    { type: "itemtype", content: "Actual", value: 85198.24 },
                  ],
                },
                {
                  type: "month",
                  content: 9,
                  values: [
                    { type: "itemtype", content: "Actual", value: 81538.9 },
                  ],
                },
                {
                  type: "month",
                  content: 10,
                  values: [
                    { type: "itemtype", content: "Actual", value: 115393.19 },
                  ],
                },
                {
                  type: "month",
                  content: 11,
                  values: [
                    { type: "itemtype", content: "Actual", value: 143484.71 },
                  ],
                },
                {
                  type: "month",
                  content: 12,
                  values: [
                    { type: "itemtype", content: "Actual", value: -167047.33 },
                  ],
                },
              ],
            },
            {
              type: "year",
              content: 2022,
              values: [
                {
                  type: "month",
                  content: 1,
                  values: [
                    {
                      type: "itemtype",
                      content: "Actual",
                      value: -14873374.36,
                    },
                    {
                      type: "itemtype",
                      content: "forecast",
                      value: -130908.27,
                    },
                  ],
                },
                {
                  type: "month",
                  content: 2,
                  values: [
                    { type: "itemtype", content: "Actual", value: 30926.79 },
                    { type: "itemtype", content: "forecast", value: 152186.25 },
                  ],
                },
                {
                  type: "month",
                  content: 3,
                  values: [
                    { type: "itemtype", content: "forecast", value: 92679.2 },
                  ],
                },
                {
                  type: "month",
                  content: 4,
                  values: [
                    { type: "itemtype", content: "forecast", value: 125392.01 },
                  ],
                },
                {
                  type: "month",
                  content: 5,
                  values: [
                    { type: "itemtype", content: "forecast", value: 106016.73 },
                  ],
                },
                {
                  type: "month",
                  content: 6,
                  values: [
                    { type: "itemtype", content: "forecast", value: 100438.94 },
                  ],
                },
                {
                  type: "month",
                  content: 7,
                  values: [
                    { type: "itemtype", content: "forecast", value: 102035.99 },
                  ],
                },
                {
                  type: "month",
                  content: 8,
                  values: [
                    { type: "itemtype", content: "forecast", value: 94886.55 },
                  ],
                },
                {
                  type: "month",
                  content: 9,
                  values: [
                    { type: "itemtype", content: "forecast", value: 119513.78 },
                  ],
                },
                {
                  type: "month",
                  content: 10,
                  values: [
                    { type: "itemtype", content: "forecast", value: 116722.26 },
                  ],
                },
                {
                  type: "month",
                  content: 11,
                  values: [
                    { type: "itemtype", content: "forecast", value: 117752.54 },
                  ],
                },
                {
                  type: "month",
                  content: 12,
                  values: [
                    { type: "itemtype", content: "forecast", value: 117766.8 },
                  ],
                },
              ],
            },
            {
              type: "year",
              content: 2023,
              values: [
                {
                  type: "month",
                  content: 1,
                  values: [
                    { type: "itemtype", content: "forecast", value: 139610.02 },
                  ],
                },
                {
                  type: "month",
                  content: 2,
                  values: [
                    { type: "itemtype", content: "forecast", value: 131665.54 },
                  ],
                },
                {
                  type: "month",
                  content: 3,
                  values: [
                    { type: "itemtype", content: "forecast", value: 120517.7 },
                  ],
                },
                {
                  type: "month",
                  content: 4,
                  values: [
                    { type: "itemtype", content: "forecast", value: 138014.28 },
                  ],
                },
                {
                  type: "month",
                  content: 5,
                  values: [
                    { type: "itemtype", content: "forecast", value: 157757.15 },
                  ],
                },
                {
                  type: "month",
                  content: 6,
                  values: [
                    { type: "itemtype", content: "forecast", value: 181841.97 },
                  ],
                },
                {
                  type: "month",
                  content: 7,
                  values: [
                    { type: "itemtype", content: "forecast", value: 174218.63 },
                  ],
                },
                {
                  type: "month",
                  content: 8,
                  values: [
                    { type: "itemtype", content: "forecast", value: 206003.51 },
                  ],
                },
                {
                  type: "month",
                  content: 9,
                  values: [
                    { type: "itemtype", content: "forecast", value: 233539.07 },
                  ],
                },
                {
                  type: "month",
                  content: 10,
                  values: [
                    { type: "itemtype", content: "forecast", value: 249498.75 },
                  ],
                },
                {
                  type: "month",
                  content: 11,
                  values: [
                    { type: "itemtype", content: "forecast", value: 270408.2 },
                  ],
                },
                {
                  type: "month",
                  content: 12,
                  values: [
                    { type: "itemtype", content: "forecast", value: 302423.95 },
                  ],
                },
              ],
            },
            {
              type: "year",
              content: 2024,
              values: [
                {
                  type: "month",
                  content: 1,
                  values: [
                    { type: "itemtype", content: "forecast", value: 345967.09 },
                  ],
                },
                {
                  type: "month",
                  content: 2,
                  values: [
                    { type: "itemtype", content: "forecast", value: 374235.59 },
                  ],
                },
                {
                  type: "month",
                  content: 3,
                  values: [
                    { type: "itemtype", content: "forecast", value: 408728.09 },
                  ],
                },
                {
                  type: "month",
                  content: 4,
                  values: [
                    { type: "itemtype", content: "forecast", value: 443571.33 },
                  ],
                },
                {
                  type: "month",
                  content: 5,
                  values: [
                    { type: "itemtype", content: "forecast", value: 491166.04 },
                  ],
                },
                {
                  type: "month",
                  content: 6,
                  values: [
                    { type: "itemtype", content: "forecast", value: 534856.9 },
                  ],
                },
                {
                  type: "month",
                  content: 7,
                  values: [
                    { type: "itemtype", content: "forecast", value: 534812.88 },
                  ],
                },
                {
                  type: "month",
                  content: 8,
                  values: [
                    { type: "itemtype", content: "forecast", value: 586282.32 },
                  ],
                },
                {
                  type: "month",
                  content: 9,
                  values: [
                    { type: "itemtype", content: "forecast", value: 645949.29 },
                  ],
                },
                {
                  type: "month",
                  content: 10,
                  values: [
                    { type: "itemtype", content: "forecast", value: 697175.09 },
                  ],
                },
                {
                  type: "month",
                  content: 11,
                  values: [
                    { type: "itemtype", content: "forecast", value: 754293.29 },
                  ],
                },
                {
                  type: "month",
                  content: 12,
                  values: [
                    { type: "itemtype", content: "forecast", value: 808611.44 },
                  ],
                },
              ],
            },
            {
              type: "year",
              content: 2025,
              values: [
                {
                  type: "month",
                  content: 1,
                  values: [
                    { type: "itemtype", content: "forecast", value: 909463.5 },
                  ],
                },
                {
                  type: "month",
                  content: 2,
                  values: [
                    { type: "itemtype", content: "forecast", value: 965383.9 },
                  ],
                },
                {
                  type: "month",
                  content: 3,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1032137.3 },
                  ],
                },
                {
                  type: "month",
                  content: 4,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1125633.6 },
                  ],
                },
                {
                  type: "month",
                  content: 5,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1203271.1 },
                  ],
                },
                {
                  type: "month",
                  content: 6,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1281945.5 },
                  ],
                },
                {
                  type: "month",
                  content: 7,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1296606.8 },
                  ],
                },
                {
                  type: "month",
                  content: 8,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1422826.5 },
                  ],
                },
                {
                  type: "month",
                  content: 9,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1510330.8 },
                  ],
                },
                {
                  type: "month",
                  content: 10,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1637772.5 },
                  ],
                },
                {
                  type: "month",
                  content: 11,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1738331.6 },
                  ],
                },
                {
                  type: "month",
                  content: 12,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1838980.0 },
                  ],
                },
              ],
            },
            {
              type: "year",
              content: 2026,
              values: [
                {
                  type: "month",
                  content: 1,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1823119.2 },
                  ],
                },
                {
                  type: "month",
                  content: 2,
                  values: [
                    { type: "itemtype", content: "forecast", value: 1983411.6 },
                  ],
                },
                {
                  type: "month",
                  content: 3,
                  values: [
                    { type: "itemtype", content: "forecast", value: 2125063.6 },
                  ],
                },
                {
                  type: "month",
                  content: 4,
                  values: [
                    { type: "itemtype", content: "forecast", value: 2277452.8 },
                  ],
                },
                {
                  type: "month",
                  content: 5,
                  values: [
                    { type: "itemtype", content: "forecast", value: 2411963.8 },
                  ],
                },
                {
                  type: "month",
                  content: 6,
                  values: [
                    { type: "itemtype", content: "forecast", value: 2550243.5 },
                  ],
                },
                {
                  type: "month",
                  content: 7,
                  values: [
                    { type: "itemtype", content: "forecast", value: 2589963.4 },
                  ],
                },
                {
                  type: "month",
                  content: 8,
                  values: [
                    { type: "itemtype", content: "forecast", value: 2781988.2 },
                  ],
                },
                {
                  type: "month",
                  content: 9,
                  values: [
                    { type: "itemtype", content: "forecast", value: 2946917.5 },
                  ],
                },
                {
                  type: "month",
                  content: 10,
                  values: [
                    { type: "itemtype", content: "forecast", value: 3172306.5 },
                  ],
                },
                {
                  type: "month",
                  content: 11,
                  values: [
                    { type: "itemtype", content: "forecast", value: 3323613.3 },
                  ],
                },
                {
                  type: "month",
                  content: 12,
                  values: [
                    { type: "itemtype", content: "forecast", value: 3505833.3 },
                  ],
                },
              ],
            },
          ],
          details: [
            {
              content: "Cost of Goods Sold",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2021,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        { type: "itemtype", content: "Actual", value: -75.79 },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        { type: "itemtype", content: "Actual", value: -6280.0 },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -47604.2,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -36342.2,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -40272.82,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -13900.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -53401.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -46747.96,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -37004.46,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -34959.41,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -23009.19,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -270990.9,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -74904.9,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Interest Senior Funding",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -75.79,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -44864.2,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -30962.2,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -34752.82,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -60.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -46921.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -41347.96,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -25644.46,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -28179.41,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -17149.19,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -25222.84,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -93333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -105000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -105000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -105000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -110833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -110833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -116667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -128333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -134167.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -140000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -145833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -74904.9,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -99166.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -135000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -130000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -135000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -155000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -170000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -175000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -195000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -215000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -230000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -255000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -280000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -140000.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -237500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -287500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -312500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -337500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -366667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -379167.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -412500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -445833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -483333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -520833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -558333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -262500.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -460000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -533333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -573333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -616667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -656667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -680000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -726667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -776667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -833333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -886667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -940000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -496667.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -970000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1096667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1173333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1246667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1320000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1360000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1443333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1526667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1630000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1723333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1820000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1033333.0,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  content: "MF2 Raisin Bank Fees",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -6280.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -2740.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5380.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5520.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -13840.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -6480.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5400.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -11360.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -6780.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5860.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -2948.82,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4256.52,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4293.86,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -5037.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -5120.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -5013.37,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6731.65,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7424.12,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7343.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7538.12,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -62263.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7450.52,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8632.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7841.37,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7767.68,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8460.29,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8958.13,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8751.72,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9986.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10600.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10835.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -11593.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7555.29,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12153.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9155.26,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9638.83,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9983.72,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10585.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -11040.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10976.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -11964.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12461.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12939.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13597.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8004.55,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -14098.5,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15557.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16157.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16812.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -17584.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18196.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18184.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19397.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20025.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20776.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -21582.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -14055.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -22228.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -24196.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -24898.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -25881.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26833.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -27616.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -27655.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -29143.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -29905.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -30988.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -32028.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -22227.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -32850.1,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  content: "MF2 Interest Intercompany Loans",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -245768.06,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18958.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18958.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18958.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -22500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -22500.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -53333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -100000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -53333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -60000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -60000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -66666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -66666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -73333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -73333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -80000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -86666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -86666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -93333.3,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "Revenues",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2021,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 98267.65,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 39424.98,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 93080.97,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 75463.54,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        { type: "itemtype", content: "Actual", value: 64619.3 },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 117334.01,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 98973.98,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 133586.08,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 115029.73,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 157711.24,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 168133.78,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 216685.8,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 94465.38,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: 107471.57,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Interest Income",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 98267.65,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 39424.98,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 93080.97,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 75463.54,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 64619.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 117334.01,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 98973.98,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 133586.08,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 115029.73,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 157711.24,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 168133.78,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 216585.8,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 94465.38,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 206558.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 107471.57,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 219324.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 233355.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 267965.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 270069.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 274903.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 279364.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 290111.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 328810.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 346166.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 360671.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 372325.6,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 399551.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 411121.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 392466.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 413628.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 463155.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 516553.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 529533.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 589251.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 655382.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 706495.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 778026.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 853514.6,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 878185.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 962834.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1056124.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1143580.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1245417.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1352756.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1396065.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1513368.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1638673.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1768562.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1904952.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2047480.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2108741.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2266567.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2436996.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2625327.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2811787.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3007342.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3101941.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3314153.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3538014.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3795107.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4036163.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4285968.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4408460.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4682645.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4974827.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 5321297.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 5640859.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 5974690.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 6153758.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 6515078.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 6893758.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 7351426.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 7762496.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 8189154.0,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  content: "MF2 Other Income",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 100.0,
                            },
                          ],
                        },
                      ],
                    },
                    { type: "year", content: 2022, values: [] },
                    { type: "year", content: 2023, values: [] },
                    { type: "year", content: 2024, values: [] },
                    { type: "year", content: 2025, values: [] },
                    { type: "year", content: 2026, values: [] },
                  ],
                },
              ],
            },
            {
              content: "Total Operating Expenses",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2021,
                  values: [
                    {
                      type: "month",
                      content: 4,
                      values: [
                        { type: "itemtype", content: "Actual", value: -100.01 },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -28639.88,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        { type: "itemtype", content: "Actual", value: -720.07 },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -1639.88,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -1639.88,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -1639.88,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -2205.13,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -1639.88,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -11344.31,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -7402.88,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -1639.88,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Admin",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -100.01,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -720.07,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1703.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -10969.31,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  content: "MF2 Legal",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -27000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -501.25,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -375.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5763.0,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "Unmapped",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2021,
                  values: [
                    {
                      type: "month",
                      content: 9,
                      values: [
                        { type: "itemtype", content: "Actual", value: 5153.51 },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -5153.51,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "Actual",
                          value: -101397.92,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Admin",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4616.43,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6071.17,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8139.76,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10445.9,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13015.7,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Admin",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -100.01,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -720.07,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1703.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -10969.31,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -1639.88,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4616.43,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6071.17,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8139.76,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10445.9,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13015.7,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Interest Income",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 206558.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 219324.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 233355.1,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 267965.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 270069.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 274903.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 279364.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 290111.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 328810.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 346166.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 360671.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 372325.6,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 399551.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 411121.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 392466.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 413628.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 463155.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 516553.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 529533.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 589251.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 655382.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 706495.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 778026.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 853514.6,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 878185.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 962834.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1056124.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1143580.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1245417.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1352756.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1396065.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1513368.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1638673.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1768562.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 1904952.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 2047480.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 2108741.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 2266567.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 2436996.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 2625327.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 2811787.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 3007342.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 3101941.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 3314153.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 3538014.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 3795107.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 4036163.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 4285968.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 4408460.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 4682645.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 4974827.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 5321297.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 5640859.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 5974690.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 6153758.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 6515078.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 6893758.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 7351426.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 7762496.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 8189154.0,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Interest Income",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 98267.65,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 39424.98,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 93080.97,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 75463.54,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 64619.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 117334.01,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 98973.98,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 133586.08,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 115029.73,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 157711.24,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 168133.78,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 216585.8,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 94465.38,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 206558.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 107471.57,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 219324.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 233355.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 267965.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 270069.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 274903.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 279364.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 290111.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 328810.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 346166.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 360671.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 372325.6,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 399551.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 411121.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 392466.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 413628.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 463155.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 516553.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 529533.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 589251.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 655382.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 706495.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 778026.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 853514.6,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 878185.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 962834.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1056124.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1143580.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1245417.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1352756.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1396065.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1513368.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1638673.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1768562.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 1904952.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2047480.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2108741.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2266567.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2436996.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2625327.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 2811787.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3007342.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3101941.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3314153.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3538014.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 3795107.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4036163.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4285968.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4408460.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4682645.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 4974827.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 5321297.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 5640859.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 5974690.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 6153758.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 6515078.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 6893758.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 7351426.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 7762496.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 8189154.0,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Interest Intercompany Loans",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -18958.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -18958.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -18958.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -16666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -16666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -16666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -16666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -16666.7,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -22500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -22500.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -33333.3,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -33333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -33333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -33333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -40000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -40000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -40000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -46666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -46666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -46666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -53333.3,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -53333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -60000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -60000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -66666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -66666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -73333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -73333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -80000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -86666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -86666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -93333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -100000.0,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Interest Intercompany Loans",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -245768.06,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18958.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18958.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18958.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16666.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -22500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -22500.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -53333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -100000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -53333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -60000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -60000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -66666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -66666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -73333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -73333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -80000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -86666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -86666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -93333.3,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Interest Mezzanine",
              type: "coa_level1",
              values: [
                { type: "year", content: 2022, values: [] },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7500.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20000.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -33333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -33333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -33333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -40000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -40000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -40000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -46666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -46666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -46666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -53333.3,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -53333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -60000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -60000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -66666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -66666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -73333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -73333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -80000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -86666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -86666.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -93333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -100000.0,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Interest Mezzanine",
                  type: "coa_level2",
                  values: [
                    { type: "year", content: 2022, values: [] },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7500.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20000.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -40000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -53333.3,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -53333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -60000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -60000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -66666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -66666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -73333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -73333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -80000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -86666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -86666.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -93333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -100000.0,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Interest Senior Funding",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -93333.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -99166.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -105000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -105000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -105000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -110833.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -110833.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -116667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -128333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -134167.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -140000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -145833.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -135000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -140000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -130000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -135000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -155000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -170000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -175000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -195000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -215000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -230000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -255000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -280000.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -237500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -262500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -287500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -312500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -337500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -366667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -379167.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -412500.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -445833.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -483333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -520833.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -558333.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -460000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -496667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -533333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -573333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -616667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -656667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -680000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -726667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -776667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -833333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -886667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -940000.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -970000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1033333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1096667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1173333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1246667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1320000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1360000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1443333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1526667.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1630000.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1723333.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1820000.0,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Interest Senior Funding",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -75.79,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -44864.2,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -30962.2,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -34752.82,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -60.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -46921.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -41347.96,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -25644.46,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -28179.41,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -17149.19,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -25222.84,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -93333.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -105000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -105000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -105000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -110833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -110833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -116667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -128333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -134167.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -140000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -145833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -74904.9,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -99166.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -135000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -130000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -135000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -155000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -170000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -175000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -195000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -215000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -230000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -255000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -280000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -140000.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -237500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -287500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -312500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -337500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -366667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -379167.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -412500.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -445833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -483333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -520833.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -558333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -262500.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -460000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -533333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -573333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -616667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -656667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -680000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -726667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -776667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -833333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -886667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -940000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -496667.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -970000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1096667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1173333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1246667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1320000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1360000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1443333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1526667.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1630000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1723333.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1820000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1033333.0,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Legal",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6924.64,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9106.76,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12209.6,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15668.9,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19523.5,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Legal",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -27000.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -501.25,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -375.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5763.0,
                            },
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6924.64,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9106.76,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12209.6,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15668.9,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19523.5,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Liquidation Profits",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 88822.84,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 84654.89,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 76794.44,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 69641.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 63142.91,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 57228.13,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 51924.97,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 50534.37,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 46177.29,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 42246.83,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 38681.49,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 38383.54,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 35493.47,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 30526.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 29472.79,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 30599.27,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 31997.63,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 31089.78,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 32949.88,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 35117.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 36652.48,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 39378.63,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 42415.98,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 44676.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 48766.01,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 53255.58,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 57667.71,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 62948.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 68658.36,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 71257.94,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 77618.18,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 84464.65,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 91805.85,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 99663.95,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 108040.6,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 116292.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 126813.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 137994.2,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 150524.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 163158.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 176529.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 184107.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 198612.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 213955.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 231741.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 248913.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 266966.4,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 286627.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 308840.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 332133.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 359540.1,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 385378.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 412468.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 428970.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 458041.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 488535.1,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 525225.1,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 559006.2,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: 594347.6,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Liquidation Profits",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 88822.84,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 84654.89,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 76794.44,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 69641.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 63142.91,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 57228.13,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 51924.97,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 50534.37,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 46177.29,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 42246.83,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 38681.49,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 38383.54,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 35493.47,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 30526.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 29472.79,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 30599.27,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 31997.63,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 31089.78,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 32949.88,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 35117.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 36652.48,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 39378.63,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 42415.98,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 44676.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 48766.01,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 53255.58,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 57667.71,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 62948.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 68658.36,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 71257.94,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 77618.18,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 84464.65,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 91805.85,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 99663.95,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 108040.6,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 116292.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 126813.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 137994.2,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 150524.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 163158.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 176529.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 184107.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 198612.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 213955.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 231741.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 248913.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 266966.4,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 286627.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 308840.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 332133.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 359540.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 385378.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 412468.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 428970.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 458041.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 488535.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 525225.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 559006.2,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: 594347.6,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 New Notional in Liquidation",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -151370.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -23346.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -24700.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -24611.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -24890.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -25315.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -25574.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -27091.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -30531.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -31963.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -33154.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -34142.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -39942.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -41535.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -39448.2,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -41431.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -46370.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -51574.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -52838.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -58991.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -65464.2,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -70433.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -77544.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -84939.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -94910.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -104522.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -114467.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -123874.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -134948.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -146507.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -151277.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -164335.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -177810.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -191897.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -206803.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -222249.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -247203.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -266594.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -286535.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -308818.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -330999.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -354182.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -365657.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -391323.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -417793.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -448304.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -477053.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -506815.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -560091.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -596580.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -633858.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -678698.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -720080.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -763379.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -787120.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -834617.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -883537.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -942959.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -996589.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1052141.0,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 New Notional in Liquidation",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -151370.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -23346.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -24700.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -24611.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -24890.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -25315.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -25574.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -27091.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -30531.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -31963.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -33154.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -34142.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -39942.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -41535.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -39448.2,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -41431.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -46370.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -51574.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -52838.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -58991.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -65464.2,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -70433.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -77544.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -84939.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -94910.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -104522.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -114467.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -123874.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -134948.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -146507.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -151277.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -164335.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -177810.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -191897.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -206803.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -222249.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -247203.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -266594.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -286535.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -308818.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -330999.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -354182.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -365657.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -391323.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -417793.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -448304.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -477053.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -506815.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -560091.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -596580.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -633858.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -678698.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -720080.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -763379.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -787120.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -834617.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -883537.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -942959.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -996589.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -1052141.0,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Other Income",
              type: "coa_level1",
              values: [
                { type: "year", content: 2022, values: [] },
                { type: "year", content: 2023, values: [] },
                { type: "year", content: 2024, values: [] },
                { type: "year", content: 2025, values: [] },
                { type: "year", content: 2026, values: [] },
              ],
              details: [
                {
                  content: "MF2 Other Income",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: 100.0,
                            },
                          ],
                        },
                      ],
                    },
                    { type: "year", content: 2022, values: [] },
                    { type: "year", content: 2023, values: [] },
                    { type: "year", content: 2024, values: [] },
                    { type: "year", content: 2025, values: [] },
                    { type: "year", content: 2026, values: [] },
                  ],
                },
              ],
            },
            {
              content: "MF2 Raisin Bank Fees",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -62263.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -2948.82,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4256.52,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -4293.86,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -5037.1,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -5120.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -5013.37,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -6731.65,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7424.12,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7343.76,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7538.12,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7450.52,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7555.29,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8632.1,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7841.37,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -7767.68,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8460.29,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8958.13,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8751.72,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9986.64,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10600.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10835.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -11593.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12153.7,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -8004.55,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9155.26,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9638.83,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -9983.72,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10585.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -11040.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -10976.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -11964.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12461.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -12939.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -13597.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -14098.5,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -14055.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -15557.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -16157.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -16812.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -17584.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -18196.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -18184.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -19397.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20025.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -20776.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -21582.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -22228.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -22227.3,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -24196.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -24898.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -25881.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -26833.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -27616.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -27655.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -29143.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -29905.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -30988.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -32028.1,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -32850.1,
                        },
                      ],
                    },
                  ],
                },
              ],
              details: [
                {
                  content: "MF2 Raisin Bank Fees",
                  type: "coa_level2",
                  values: [
                    {
                      type: "year",
                      content: 2021,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -6280.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -2740.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5380.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5520.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -13840.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -6480.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5400.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -11360.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -6780.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "Actual",
                              value: -5860.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2022,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -2948.82,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4256.52,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -4293.86,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -5037.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -5120.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -5013.37,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -6731.65,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7424.12,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7343.76,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7538.12,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -62263.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7450.52,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2023,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8632.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7841.37,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7767.68,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8460.29,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8958.13,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8751.72,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9986.64,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10600.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10835.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -11593.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -7555.29,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12153.7,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2024,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9155.26,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9638.83,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -9983.72,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10585.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -11040.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -10976.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -11964.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12461.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -12939.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -13597.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -8004.55,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -14098.5,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2025,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -15557.6,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16157.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -16812.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -17584.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18196.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -18184.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -19397.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20025.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -20776.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -21582.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -14055.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -22228.0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "year",
                      content: 2026,
                      values: [
                        {
                          type: "month",
                          content: 2,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -24196.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 3,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -24898.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 4,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -25881.7,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 5,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -26833.4,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 6,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -27616.5,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 7,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -27655.8,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 8,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -29143.9,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 9,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -29905.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 10,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -30988.0,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 11,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -32028.1,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 1,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -22227.3,
                            },
                          ],
                        },
                        {
                          type: "month",
                          content: 12,
                          values: [
                            {
                              type: "itemtype",
                              content: "forecast",
                              value: -32850.1,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              content: "MF2 Servicing Fee",
              type: "coa_level1",
              values: [
                {
                  type: "year",
                  content: 2022,
                  values: [
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -60874.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -61421.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -74725.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -72296.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -69094.1,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -68451.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -65335.5,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -73939.6,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -76264.9,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -77607.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2023,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -78149.4,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -87103.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -87507.7,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -83210.2,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -88489.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -98498.8,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -112136.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -114542.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -128218.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -144703.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -157681.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -171236.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2024,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -189464.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -214172.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -235363.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -257636.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -280483.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -308660.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -337407.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -348888.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -374068.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -408007.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -442073.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -478546.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2025,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -514863.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -569730.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -614046.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -658473.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -713642.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -766766.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -819485.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -846437.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -907705.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -967214.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1041994.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1112130.0,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "year",
                  content: 2026,
                  values: [
                    {
                      type: "month",
                      content: 1,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1180444.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 2,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1201425.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 3,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1273934.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 4,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1359599.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 5,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1454821.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 6,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1546714.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 7,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1638783.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 8,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1691498.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 9,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1789394.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 10,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -1894525.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 11,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -2026733.0,
                        },
                      ],
                    },
                    {
                      type: "month",
                      content: 12,
                      values: [
                        {
                          type: "itemtype",
                          content: "forecast",
                          value: -2140138.0,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    properties: [],
  });
  const empty = useMemo(
    () => !table.columns.length && !table.rows.length,
    [table]
  );
  const configure = useCallback(
    (event) => [event.preventDefault(), open()],
    [open]
  );
  const toggle = useCallback((params) => persist(reducers.toggle(params)), []);
  const fetch = useCallback(() => Promise.resolve([]), []);

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
    table,
    toggle,
  };
};
