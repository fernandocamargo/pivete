/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  columns: [
    {
      content: "2021",
      type: "year",
      details: [
        {
          content: "Jan",
          type: "month",
          details: [
            { content: "Actual", type: "itemtype" },
            { content: "Budget", type: "itemtype" },
            { content: "Actual vs. Budget", type: "itemtype" },
          ],
        },
        {
          content: "Fev",
          type: "month",
          details: [
            { content: "Actual", type: "itemtype" },
            { content: "Budget", type: "itemtype" },
            { content: "Actual vs. Budget", type: "itemtype" },
          ],
        },
      ],
    },
  ],
  rows: [
    {
      content: "Office 1",
      type: "office_id",
      value: [
        {
          content: 1_000_000,
          type: "year",
          value: [
            {
              content: 500_000,
              type: "month",
              value: [
                { content: 250_000, type: "itemtype" },
                { content: 250_000, type: "itemtype" },
                { content: "50%", type: "itemtype" },
              ],
            },
            {
              content: 500_000,
              type: "month",
              value: [
                { content: 250_000, type: "itemtype" },
                { content: 250_000, type: "itemtype" },
                { content: "50%", type: "itemtype" },
              ],
            },
          ],
        },
      ],
      details: [
        {
          content: "Finance, BI & Operations",
          type: "cc_level1",
          value: [
            {
              content: 500_000,
              type: "month",
              value: [
                { content: 250_000, type: "itemtype" },
                { content: 250_000, type: "itemtype" },
                { content: "50%", type: "itemtype" },
              ],
            },
            {
              content: 500_000,
              type: "month",
              value: [
                { content: 250_000, type: "itemtype" },
                { content: 250_000, type: "itemtype" },
                { content: "50%", type: "itemtype" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const fake = [
  {
    label: "Office 2",
    type: "office_id",
    value: [
      {
        label: "General & Administrative",
        type: "cc_level1",
        value: [
          {
            label: "Finance, BI & Operations",
            type: "cc_level2",
            value: [
              {
                label: "Current assets",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Retention",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Leads",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "Marketing",
            type: "cc_level2",
            value: [
              {
                label: "SEO",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Social Media",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Branding",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "Finance",
            type: "cc_level2",
            value: [
              {
                label: "RH",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Accounting",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Operations",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
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
      {
        label: "Product",
        type: "cc_level1",
        value: [
          {
            label: "Sales",
            type: "cc_level2",
            value: [
              {
                label: "Current assets",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Retention",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Leads",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "Legal",
            type: "cc_level2",
            value: [
              {
                label: "SEO",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Social Media",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Branding",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "Office Management",
            type: "cc_level2",
            value: [
              {
                label: "RH",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Accounting",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Operations",
                type: "coa_level1",
                value: [
                  {
                    label: "2021",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                    ],
                  },
                  {
                    label: "2022",
                    type: "year",
                    value: [
                      {
                        label: "Jan",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Feb",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Mar",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          { label: "Delta %", type: "itemtype", value: "60%" },
                        ],
                      },
                      {
                        label: "Apr",
                        type: "month",
                        value: [
                          {
                            label: "Actual",
                            type: "itemtype",
                            value: "322,38",
                          },
                          {
                            label: "Budget",
                            type: "itemtype",
                            value: "122,38",
                          },
                          {
                            label: "Delta %",
                            type: "itemtype",
                            value: "60%",
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
    ],
  },
];
