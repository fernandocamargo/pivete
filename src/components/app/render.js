/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useMemo } from "react";

import { useModal } from "hooks";
// import { Table } from "components/widgets";

import use from "./hooks";
import Header from "./header";
import Settings from "./settings";

export default ({ className }) => {
  const { Container: Modal, ...modal } = useModal();
  // const { close, configure, empty, ref, settings, ...table } = use({ modal });
  const { close, configure, settings, toggle } = use({ modal });
  const properties = useMemo(
    () => [
      {
        content: "Rows",
        type: "rows",
        details: [
          {
            content: "Accounting data",
            details: [
              {
                content: "Dimensions",
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
                    content: "Account",
                    type: "account",
                    value: [
                      {
                        content: "6770 Verkaufsprovisionen",
                        value: "6770 Verkaufsprovisionen",
                      },
                      {
                        content: "5904 sonstige Gebühren / Registergebühren",
                        value: "5904 sonstige Gebühren / Registergebühren",
                      },
                      {
                        content: "6600 Werbekosten",
                        value: "6600 Werbekosten",
                      },
                      {
                        content: "5903 Lagerkosten",
                        value: "5903 Lagerkosten",
                      },
                      {
                        content: "6663 Reisekosten Arbeitnehmer, Fahrtkosten",
                        value: "6663 Reisekosten Arbeitnehmer, Fahrtkosten",
                      },
                      {
                        content: "6837 Aufwendungen für Lizenzen, Konzessionen",
                        value: "6837 Aufwendungen für Lizenzen, Konzessionen",
                      },
                      { content: "6010 Löhne", value: "6010 Löhne" },
                      {
                        content: "6495 Wartungskosten für Hard- und Software",
                        value: "6495 Wartungskosten für Hard- und Software",
                      },
                      {
                        content: "6640 Bewirtungskosten",
                        value: "6640 Bewirtungskosten",
                      },
                      {
                        content: "4836 Erlöse Verkäufe Amazon Verwertung 19%",
                        value: "4836 Erlöse Verkäufe Amazon Verwertung 19%",
                      },
                      {
                        content:
                          "6130 Freiwillige soziale Aufwendung. LSt-frei",
                        value: "6130 Freiwillige soziale Aufwendung. LSt-frei",
                      },
                      { content: "6805 Telefon", value: "6805 Telefon" },
                      {
                        content: "5902 Zinsaufwendungen DHB Bank",
                        value: "5902 Zinsaufwendungen DHB Bank",
                      },
                      {
                        content: "6110 Gesetzliche Sozialaufwendungen",
                        value: "6110 Gesetzliche Sozialaufwendungen",
                      },
                      {
                        content: "6304 Sonstige betriebl.u.regelm.Aufwendungen",
                        value: "6304 Sonstige betriebl.u.regelm.Aufwendungen",
                      },
                      {
                        content: "4401 Erlöse 19% USt",
                        value: "4401 Erlöse 19% USt",
                      },
                      { content: "6020 Gehälter", value: "6020 Gehälter" },
                    ],
                  },
                  {
                    content: "CC Level 1",
                    type: "cc_level1",
                    value: [{ content: "CEO", value: "CEO" }],
                  },
                  {
                    content: "CC Level 2",
                    type: "cc_level2",
                    value: [
                      {
                        content: "Customer Success",
                        value: "Customer Success",
                      },
                      { content: "CEO Office", value: "CEO Office" },
                      { content: "Marketing", value: "Marketing" },
                      { content: null, value: null },
                      {
                        content: "Cost of Service (COGS)",
                        value: "Cost of Service (COGS)",
                      },
                      {
                        content: "People & Organization",
                        value: "People & Organization",
                      },
                      { content: "Revenue", value: "Revenue" },
                      { content: "Rev Ops", value: "Rev Ops" },
                      { content: "Gross Profit_1", value: "Gross Profit_1" },
                      { content: "Sales", value: "Sales" },
                      {
                        content: "Product & Engineering_300",
                        value: "Product & Engineering_300",
                      },
                      {
                        content: "Product & Engineering_1",
                        value: "Product & Engineering_1",
                      },
                      { content: "CEO HR", value: "CEO HR" },
                      {
                        content: "Data System Engineering",
                        value: "Data System Engineering",
                      },
                      {
                        content: "General & Administrative_1",
                        value: "General & Administrative_1",
                      },
                      { content: "CEO_1", value: "CEO_1" },
                      {
                        content: "Product & Engineering_200",
                        value: "Product & Engineering_200",
                      },
                      {
                        content: "Sales & Marketing_1",
                        value: "Sales & Marketing_1",
                      },
                    ],
                  },
                  {
                    content: "CC Level 3",
                    type: "cc_level3",
                    value: [
                      {
                        content: "4310 Mgmt Customer Success",
                        value: "4310 Mgmt Customer Success",
                      },
                      { content: null, value: null },
                      {
                        content: "4140 Events & Messen",
                        value: "4140 Events & Messen",
                      },
                      {
                        content: "4130 Content Marketing",
                        value: "4130 Content Marketing",
                      },
                      { content: "1200 COGS", value: "1200 COGS" },
                      {
                        content: "2220 People Operations",
                        value: "2220 People Operations",
                      },
                      { content: "1100 Revenue", value: "1100 Revenue" },
                      {
                        content: "1000 Gross Profit",
                        value: "1000 Gross Profit",
                      },
                      { content: "4100 Marketing", value: "4100 Marketing" },
                      { content: "4200 Sales", value: "4200 Sales" },
                      {
                        content: "3020 Team Internet Explorers",
                        value: "3020 Team Internet Explorers",
                      },
                      {
                        content: "2240 Employer Branding",
                        value: "2240 Employer Branding",
                      },
                      {
                        content: "2230 Talent Acquisition",
                        value: "2230 Talent Acquisition",
                      },
                      {
                        content: "4230 Account Executives",
                        value: "4230 Account Executives",
                      },
                      {
                        content: "4300 Customer Success",
                        value: "4300 Customer Success",
                      },
                      {
                        content: "4340 Customer & Professional Service",
                        value: "4340 Customer & Professional Service",
                      },
                      {
                        content: "3000 Product & Engineering",
                        value: "3000 Product & Engineering",
                      },
                      {
                        content: "3010 Mgmt Product & Engineering",
                        value: "3010 Mgmt Product & Engineering",
                      },
                      {
                        content: "4110 Mgmt Marketing",
                        value: "4110 Mgmt Marketing",
                      },
                      {
                        content: "2200 People & Organization",
                        value: "2200 People & Organization",
                      },
                      {
                        content: "4220 Sales Development",
                        value: "4220 Sales Development",
                      },
                      { content: "4210 Mgmt Sales", value: "4210 Mgmt Sales" },
                      {
                        content: "4120 Growth Marketing",
                        value: "4120 Growth Marketing",
                      },
                      {
                        content: "4320 Customer Success Management",
                        value: "4320 Customer Success Management",
                      },
                      { content: "2900 CEO HR", value: "2900 CEO HR" },
                      {
                        content: "3100 Data System Engineering",
                        value: "3100 Data System Engineering",
                      },
                      {
                        content: "2000 General & Administrative",
                        value: "2000 General & Administrative",
                      },
                      { content: "3300 P&E", value: "3300 P&E" },
                      { content: "5000 CEO", value: "5000 CEO" },
                      {
                        content: "3030 Team Daywalkers",
                        value: "3030 Team Daywalkers",
                      },
                      { content: "3200 P&E", value: "3200 P&E" },
                      {
                        content: "4330 Customer Implementation",
                        value: "4330 Customer Implementation",
                      },
                      {
                        content: "4400 Customer Success",
                        value: "4400 Customer Success",
                      },
                      {
                        content: "4000 Sales & Marketing",
                        value: "4000 Sales & Marketing",
                      },
                      { content: "5010 Mgmt CEO", value: "5010 Mgmt CEO" },
                      {
                        content: "2210 Mgmt People & Organization",
                        value: "2210 Mgmt People & Organization",
                      },
                    ],
                  },
                ],
              },
              {
                content: "Timeline",
                value: [
                  {
                    content: "Year",
                    type: "year",
                    value: [
                      { content: "2017", value: "2017" },
                      { content: "2018", value: "2018" },
                      { content: "2019", value: "2019" },
                      { content: "2020", value: "2020" },
                      { content: "2021", value: "2021" },
                      { content: "2022", value: "2022" },
                      { content: "2023", value: "2023" },
                      { content: "2024", value: "2024" },
                      { content: "2025", value: "2025" },
                      { content: "2026", value: "2026" },
                    ],
                  },
                  {
                    content: "Month",
                    type: "month",
                    value: [
                      { content: "01", value: "01" },
                      { content: "02", value: "02" },
                      { content: "03", value: "03" },
                      { content: "04", value: "04" },
                      { content: "05", value: "05" },
                      { content: "06", value: "06" },
                      { content: "07", value: "07" },
                      { content: "08", value: "08" },
                      { content: "09", value: "09" },
                      { content: "10", value: "10" },
                      { content: "11", value: "11" },
                      { content: "12", value: "12" },
                    ],
                  },
                ],
              },
            ],
          },
          { content: "Employee data", details: [] },
          { content: "Customer data", details: [] },
          { content: "Timeline data", details: [] },
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
              { content: "Actual", value: "Actual" },
              { content: "Forecast", value: "Forecast" },
              { content: "Budget", value: "Budget" },
              {
                content: "Actual vs. Budget",
                value: [
                  { content: "Delta (%)", value: "Actual / Budget" },
                  { content: "Delta (absolute)", value: "Actual / Budget" },
                ],
              },
              {
                content: "Actual vs. Forecast",
                value: [
                  { content: "Delta (%)", value: "Actual / Forecast" },
                  { content: "Delta (absolute)", value: "Actual / Forecast" },
                ],
              },
              {
                content: "Forecast vs. Budget",
                value: [
                  { content: "Delta (%)", value: "Forecast / Budget" },
                  { content: "Delta (absolute)", value: "Forecast / Budget" },
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
            {/* <pre>{JSON.stringify(settings, null, 2)}</pre> */}
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

/*
            {!empty && <Table ref={ref} settings={settings} {...table} />}
*/
