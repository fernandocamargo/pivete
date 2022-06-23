import { useMemo } from "react";

import { useModal } from "hooks";
import { Table } from "components/widgets";

import use from "./hooks";
import Header from "./header";
import Settings from "./settings";

export default ({ className }) => {
  const { Container: Modal, ...modal } = useModal();
  // const { close, configure, empty, ref, settings, ...table } = use({ modal });
  const { close, configure, ref, settings, table, toggle } = use({
    modal,
  });
  const properties = useMemo(
    () => [
      {
        content: "Rows",
        type: "rows",
        details: [
          {
            content: "Accounting data",
            value: [
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
                content: "Cost Center Levels",
                value: [
                  {
                    content: "CC Level 1",
                    type: "cc_level1",
                    value: [
                      {
                        content: "General & Administrative",
                        value: "General & Administrative",
                      },
                      {
                        content: "Sales & Marketing",
                        value: "Sales & Marketing",
                      },
                      { content: "Unmapped", value: "Unmapped" },
                      {
                        content: "Product & Engineering",
                        value: "Product & Engineering",
                      },
                      { content: "Gross Profit", value: "Gross Profit" },
                      { content: "CEO", value: "CEO" },
                    ],
                  },
                  {
                    content: "CC Level 2",
                    type: "cc_level2",
                    value: [
                      { content: "Personnel", value: "Personnel" },
                      { content: "Personnel", value: "Personnel" },
                      { content: "Non-Personnel", value: "Non-Personnel" },
                      { content: "Non-Personnel", value: "Non-Personnel" },
                      { content: "Non-Personnel", value: "Non-Personnel" },
                      { content: "Non-Personnel", value: "Non-Personnel" },
                      { content: "Personnel", value: "Personnel" },
                      { content: "Non-Personnel", value: "Non-Personnel" },
                      { content: "Personnel", value: "Personnel" },
                    ],
                  },
                  {
                    content: "CC Level 3",
                    type: "cc_level3",
                    value: [
                      {
                        content: "People & Organization",
                        value: "People & Organization",
                      },
                      { content: "Marketing", value: "Marketing" },
                      { content: "RevOps", value: "RevOps" },
                      { content: "Marketing", value: "Marketing" },
                      { content: "RevOps", value: "RevOps" },
                      { content: "CEO HR", value: "CEO HR" },
                      { content: "Sales", value: "Sales" },
                      { content: null, value: null },
                      {
                        content: "Product & Engineering_1",
                        value: "Product & Engineering_1",
                      },
                      {
                        content: "Data System Engineering",
                        value: "Data System Engineering",
                      },
                      {
                        content: "Customer Success",
                        value: "Customer Success",
                      },
                      {
                        content: "Product & Engineering_200",
                        value: "Product & Engineering_200",
                      },
                      {
                        content: "Finance, BI & Operations",
                        value: "Finance, BI & Operations",
                      },
                      {
                        content: "Product & Engineering_300",
                        value: "Product & Engineering_300",
                      },
                      { content: "Gross Profit_1", value: "Gross Profit_1" },
                      {
                        content: "Customer Success",
                        value: "Customer Success",
                      },
                      {
                        content: "Product & Engineering_300",
                        value: "Product & Engineering_300",
                      },
                      {
                        content: "General & Administrative_1",
                        value: "General & Administrative_1",
                      },
                      {
                        content: "Finance, BI & Operations",
                        value: "Finance, BI & Operations",
                      },
                      {
                        content: "Product & Engineering_1",
                        value: "Product & Engineering_1",
                      },
                      { content: "CEO_1", value: "CEO_1" },
                      { content: "Revenue", value: "Revenue" },
                      {
                        content: "Cost of Service (COGS)",
                        value: "Cost of Service (COGS)",
                      },
                      { content: "CEO-Office", value: "CEO-Office" },
                      {
                        content: "Sales & Marketing_1",
                        value: "Sales & Marketing_1",
                      },
                      {
                        content: "People & Organization",
                        value: "People & Organization",
                      },
                      { content: "CEO_1", value: "CEO_1" },
                      { content: "CEO-Office", value: "CEO-Office" },
                    ],
                  },
                  {
                    content: "CC Level 4",
                    type: "cc_level4",
                    value: [
                      {
                        content: "2240 Employer Branding",
                        value: "2240 Employer Branding",
                      },
                      {
                        content: "4110 Mgmt Marketing",
                        value: "4110 Mgmt Marketing",
                      },
                      {
                        content: "4120 Growth Marketing",
                        value: "4120 Growth Marketing",
                      },
                      {
                        content: "4130 Content Marketing",
                        value: "4130 Content Marketing",
                      },
                      {
                        content: "4140 Events & Messen",
                        value: "4140 Events & Messen",
                      },
                      { content: "2900 CEO HR", value: "2900 CEO HR" },
                      { content: "4210 Mgmt Sales", value: "4210 Mgmt Sales" },
                      { content: "4200 Sales", value: "4200 Sales" },
                      {
                        content: "4220 Sales Development",
                        value: "4220 Sales Development",
                      },
                      { content: "4210 Mgmt Sales", value: "4210 Mgmt Sales" },
                      {
                        content: "4220 Sales Development",
                        value: "4220 Sales Development",
                      },
                      {
                        content: "3000 Product & Engineering",
                        value: "3000 Product & Engineering",
                      },
                      {
                        content: "4230 Account Executives",
                        value: "4230 Account Executives",
                      },
                      {
                        content: "4230 Account Executives",
                        value: "4230 Account Executives",
                      },
                      {
                        content: "3100 Data System Engineering",
                        value: "3100 Data System Engineering",
                      },
                      {
                        content: "4310 Mgmt Customer Success",
                        value: "4310 Mgmt Customer Success",
                      },
                      { content: "3200 P&E", value: "3200 P&E" },
                      {
                        content: "2100 Finance, BI & Operations",
                        value: "2100 Finance, BI & Operations",
                      },
                      {
                        content: "3010 Mgmt Product & Engineering",
                        value: "3010 Mgmt Product & Engineering",
                      },
                      {
                        content: "4300 Customer Success",
                        value: "4300 Customer Success",
                      },
                      { content: "3300 P&E", value: "3300 P&E" },
                      {
                        content: "1000 Gross Profit",
                        value: "1000 Gross Profit",
                      },
                      {
                        content: "4320 Customer Success Management",
                        value: "4320 Customer Success Management",
                      },
                      {
                        content: "4310 Mgmt Customer Success",
                        value: "4310 Mgmt Customer Success",
                      },
                      {
                        content: "3020 Team Internet Explorers",
                        value: "3020 Team Internet Explorers",
                      },
                      {
                        content: "4320 Customer Success Management",
                        value: "4320 Customer Success Management",
                      },
                      {
                        content: "4330 Customer Implementation",
                        value: "4330 Customer Implementation",
                      },
                      {
                        content: "4330 Customer Implementation",
                        value: "4330 Customer Implementation",
                      },
                      {
                        content: "2110 Mgmt Finance, BI & Operations",
                        value: "2110 Mgmt Finance, BI & Operations",
                      },
                      {
                        content: "3010 Mgmt Product & Engineering",
                        value: "3010 Mgmt Product & Engineering",
                      },
                      {
                        content: "4340 Customer & Professional Service",
                        value: "4340 Customer & Professional Service",
                      },
                      {
                        content: "4400 Customer Success",
                        value: "4400 Customer Success",
                      },
                      {
                        content: "3020 Team Internet Explorers",
                        value: "3020 Team Internet Explorers",
                      },
                      {
                        content: "4400 Customer Success",
                        value: "4400 Customer Success",
                      },
                      {
                        content: "3030 Team Daywalkers",
                        value: "3030 Team Daywalkers",
                      },
                      {
                        content: "3030 Team Daywalkers",
                        value: "3030 Team Daywalkers",
                      },
                      {
                        content: "2000 General & Administrative",
                        value: "2000 General & Administrative",
                      },
                      {
                        content: "2100 Finance, BI & Operations",
                        value: "2100 Finance, BI & Operations",
                      },
                      {
                        content: "2110 Mgmt Finance, BI & Operations",
                        value: "2110 Mgmt Finance, BI & Operations",
                      },
                      { content: "5010 Mgmt CEO", value: "5010 Mgmt CEO" },
                      {
                        content: "2120 Finance & Operations",
                        value: "2120 Finance & Operations",
                      },
                      {
                        content: "2120 Finance & Operations",
                        value: "2120 Finance & Operations",
                      },
                      { content: "1100 Revenue", value: "1100 Revenue" },
                      {
                        content: "2130 Business Intelligence",
                        value: "2130 Business Intelligence",
                      },
                      { content: "1200 COGS", value: "1200 COGS" },
                      {
                        content: "2130 Business Intelligence",
                        value: "2130 Business Intelligence",
                      },
                      { content: "5000 CEO", value: "5000 CEO" },
                      {
                        content: "4000 Sales & Marketing",
                        value: "4000 Sales & Marketing",
                      },
                      {
                        content: "2200 People & Organization",
                        value: "2200 People & Organization",
                      },
                      {
                        content: "2210 Mgmt People & Organization",
                        value: "2210 Mgmt People & Organization",
                      },
                      { content: "4100 Marketing", value: "4100 Marketing" },
                      {
                        content: "2200 People & Organization",
                        value: "2200 People & Organization",
                      },
                      {
                        content: "4110 Mgmt Marketing",
                        value: "4110 Mgmt Marketing",
                      },
                      {
                        content: "2210 Mgmt People & Organization",
                        value: "2210 Mgmt People & Organization",
                      },
                      { content: "5010 Mgmt CEO", value: "5010 Mgmt CEO" },
                      {
                        content: "2220 People Operations",
                        value: "2220 People Operations",
                      },
                      {
                        content: "2220 People Operations",
                        value: "2220 People Operations",
                      },
                      {
                        content: "2230 Talent Acquisition",
                        value: "2230 Talent Acquisition",
                      },
                      { content: "4100 Marketing", value: "4100 Marketing" },
                      {
                        content: "2240 Employer Branding",
                        value: "2240 Employer Branding",
                      },
                    ],
                  },
                  { content: "CC Level 5", type: "cc_level5", value: [] },
                  { content: "CC Level 6", type: "cc_level6", value: [] },
                ],
              },
              {
                content: "Chart of Accounts Levels",
                value: [
                  {
                    content: "COA Level 1",
                    type: "coa_level1",
                    value: [
                      { content: "Non-personnel", value: "Non-personnel" },
                      { content: "Unmapped", value: "Unmapped" },
                      { content: "Personnel", value: "Personnel" },
                    ],
                  },
                  {
                    content: "COA Level 2",
                    type: "coa_level2",
                    value: [
                      {
                        content: "Umsatzerl\u00f6se",
                        value: "Umsatzerl\u00f6se",
                      },
                      {
                        content: "Versich./Beitr\u00e4ge",
                        value: "Versich./Beitr\u00e4ge",
                      },
                      {
                        content: "Reparatur/Instandh.",
                        value: "Reparatur/Instandh.",
                      },
                      {
                        content: "Kfz-Kosten (o. St.)",
                        value: "Kfz-Kosten (o. St.)",
                      },
                      {
                        content: "Werbe-/Reisekosten",
                        value: "Werbe-/Reisekosten",
                      },
                      {
                        content: "Kosten Warenabgabe",
                        value: "Kosten Warenabgabe",
                      },
                      { content: "Raumkosten", value: "Raumkosten" },
                      {
                        content: "Verr. kalk. Kosten",
                        value: "Verr. kalk. Kosten",
                      },
                      {
                        content: "Sonst. neutr. Ertr",
                        value: "Sonst. neutr. Ertr",
                      },
                      {
                        content: "Zinsertr\u00e4ge",
                        value: "Zinsertr\u00e4ge",
                      },
                      { content: "Zinsaufwand", value: "Zinsaufwand" },
                      {
                        content: "Steuern Eink.u.Ertr",
                        value: "Steuern Eink.u.Ertr",
                      },
                      {
                        content: "Akt.Eigenleistungen",
                        value: "Akt.Eigenleistungen",
                      },
                      { content: "Unmapped", value: "Unmapped" },
                      {
                        content: "Betriebl. Steuern",
                        value: "Betriebl. Steuern",
                      },
                      { content: "Personalkosten", value: "Personalkosten" },
                      {
                        content: "Material, Stoffe und Waren",
                        value: "Material, Stoffe und Waren",
                      },
                      {
                        content: "Besondere Kosten",
                        value: "Besondere Kosten",
                      },
                      { content: "Abschreibungen", value: "Abschreibungen" },
                      {
                        content: "Best.Verdg. FE/UE",
                        value: "Best.Verdg. FE/UE",
                      },
                      {
                        content: "Kontenkl. unbesetzt",
                        value: "Kontenkl. unbesetzt",
                      },
                      { content: "Sonstige Kosten", value: "Sonstige Kosten" },
                      {
                        content: "Sonst. neutr. Aufw",
                        value: "Sonst. neutr. Aufw",
                      },
                      {
                        content: "So. betr. Erl\u00f6se",
                        value: "So. betr. Erl\u00f6se",
                      },
                    ],
                  },
                  { content: "COA Level 3", type: "coa_level3", value: [] },
                  { content: "COA Level 4", type: "coa_level4", value: [] },
                  { content: "COA Level 5", type: "coa_level5", value: [] },
                  { content: "COA Level 6", type: "coa_level6", value: [] },
                ],
              },
              {
                content: "Profit and Loss Levels",
                value: [
                  { content: "PNL Level 1", type: "pnl_level1", value: [] },
                  { content: "PNL Level 2", type: "pnl_level2", value: [] },
                  { content: "PNL Level 3", type: "pnl_level3", value: [] },
                  { content: "PNL Level 4", type: "pnl_level4", value: [] },
                  { content: "PNL Level 5", type: "pnl_level5", value: [] },
                  { content: "PNL Level 6", type: "pnl_level6", value: [] },
                ],
              },
              {
                content: "Account",
                type: "account",
                value: [
                  { content: 2700, value: 2700 },
                  { content: 42000, value: 42000 },
                  { content: 48000, value: 48000 },
                  { content: 54000, value: 54000 },
                  { content: 73001, value: 73001 },
                ],
              },
              {
                content: "Counter Accounts",
                type: "counter_accounts",
                value: [
                  { content: 2700, value: 2700 },
                  { content: 42000, value: 42000 },
                  { content: 48000, value: 48000 },
                  { content: 54000, value: 54000 },
                  { content: 73001, value: 73001 },
                ],
              },
              {
                content: "Cost Center",
                type: "cost_center",
                value: [
                  { content: "", value: "" },
                  { content: "1000", value: "1000" },
                  { content: "1100", value: "1100" },
                  { content: "1200", value: "1200" },
                  { content: "2000", value: "2000" },
                  { content: "2100", value: "2100" },
                ],
              },
            ],
          },
          { content: "Employee data", details: [] },
          { content: "Customer data", details: [] },
          {
            content: "Timeline",
            value: [
              {
                content: "Year",
                type: "year",
                value: [{ content: 2021, value: 2021 }],
              },
              {
                content: "Month",
                type: "month",
                value: [
                  { content: 1, value: 1 },
                  { content: 2, value: 2 },
                  { content: 3, value: 3 },
                  { content: 4, value: 4 },
                  { content: 5, value: 5 },
                  { content: 6, value: 6 },
                  { content: 7, value: 7 },
                  { content: 8, value: 8 },
                  { content: 9, value: 9 },
                  { content: 10, value: 10 },
                  { content: 11, value: 11 },
                  { content: 12, value: 12 },
                ],
              },
            ],
          },
        ],
      },
      { content: "Columns", type: "columns", details: [] },
      {
        content: "Values",
        type: "values",
        details: [
          {
            content: "Item type",
            type: "itemtype",
            value: [
              { content: "Actual", value: "actual" },
              { content: "Forecast", value: "forecast" },
              { content: "Budget", value: "budget" },
              {
                content: "Actual vs. Budget",
                value: [
                  { content: "Delta (%)", value: "actual / budget" },
                  { content: "Delta (absolute)", value: "actual / budget" },
                ],
              },
              {
                content: "Actual vs. Forecast",
                value: [
                  { content: "Delta (%)", value: "actual / forecast" },
                  { content: "Delta (absolute)", value: "actual / forecast" },
                ],
              },
              {
                content: "Forecast vs. Budget",
                value: [
                  { content: "Delta (%)", value: "forecast / budget" },
                  { content: "Delta (absolute)", value: "forecast / budget" },
                ],
              },
            ],
          },
        ],
      },
    ],
    []
  );

  return (
    <div className={className}>
      <Header />
      <div role="main">
        <section>
          <h1>Report Builder</h1>
          <p>
            Select & add KPIs to the desired section of the report builder
            table.
          </p>
          <nav>
            <h4>Actions:</h4>
            <ul>
              <li aria-roledescription="settings">
                <a href="/" title="Configure" onClick={configure}>
                  Configure
                </a>
              </li>
              <li aria-roledescription="chart">
                <a href="/" title="Create chart">
                  Create chart
                </a>
              </li>
              <li aria-roledescription="create">
                <a href="/" title="New table">
                  New table
                </a>
              </li>
              <li aria-roledescription="formula">
                <a href="/" title="Formula">
                  Formula
                </a>
              </li>
              <li aria-roledescription="templates">
                <a href="/" title="Templates">
                  Templates
                </a>
              </li>
              <li aria-roledescription="save">
                <a href="/" title="Save">
                  Save
                </a>
              </li>
            </ul>
          </nav>
          <article>
            <Table ref={ref} settings={settings} {...table} />
            <p>LOL, this is a test</p>
            <Modal>
              <Settings
                close={close}
                properties={properties}
                settings={settings}
                toggle={toggle}
              />
            </Modal>
          </article>
        </section>
      </div>
      <footer></footer>
    </div>
  );
};
