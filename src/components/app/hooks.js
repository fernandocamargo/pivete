import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import * as reducers from "./reducers";

export default ({ modal: { open, close } }) => {
  const ref = useRef();
  const [{ properties, settings, table }, persist] = useState({
    settings: {
      columns: [
        { content: "Year", type: "year", value: [] },
        { content: "Month", type: "month", value: [] },
      ],
      rows: [
        {
          content: "Office ID",
          type: "office_id",
          value: [
            {
              content: "b1060606-c7f3-4749-bf4f-adb84885ebcd",
              value: "b1060606-c7f3-4749-bf4f-adb84885ebcd",
            },
          ],
        },
        { content: "CC Level 1", type: "cc_level1", value: [] },
        { content: "CC Level 2", type: "cc_level2", value: [] },
      ],
      values: [
        {
          content: "Item type",
          type: "itemtype",
          value: [{ content: "Actual", value: "actual" }],
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
              details: [{ content: "Actual", type: "itemtype" }],
            },
            {
              content: 2,
              type: "month",
              details: [{ content: "Actual", type: "itemtype" }],
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
                  ],
                },
                {
                  type: "month",
                  content: 2,
                  values: [
                    { type: "itemtype", content: "Actual", value: 30926.79 },
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
                { type: "year", content: 2022, values: [] },
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
                    { type: "year", content: 2022, values: [] },
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
                { type: "year", content: 2022, values: [] },
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
                    { type: "year", content: 2022, values: [] },
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
                    { type: "year", content: 2022, values: [] },
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
