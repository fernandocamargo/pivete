/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useMemo } from "react";

import { useModal } from "hooks";
import { Table } from "components/widgets";

import use from "./hooks";
import Header from "./header";
import Settings from "./settings";

export default ({ className }) => {
  const { Container: Modal, ...modal } = useModal({ open: true });
  const { close, configure, empty, ref, settings, ...table } = use({ modal });
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
                    content: "Account",
                    type: "account",
                    value: [
                      { content: "6770 Verkaufsprovisionen" },
                      { content: "5904 sonstige Gebühren / Registergebühren" },
                      { content: "6600 Werbekosten" },
                      { content: "5903 Lagerkosten" },
                      { content: "6663 Reisekosten Arbeitnehmer, Fahrtkosten" },
                      {
                        content: "6837 Aufwendungen für Lizenzen, Konzessionen",
                      },
                      { content: "6010 Löhne" },
                      { content: "6495 Wartungskosten für Hard- und Software" },
                      { content: "6640 Bewirtungskosten" },
                      { content: "4836 Erlöse Verkäufe Amazon Verwertung 19%" },
                      {
                        content:
                          "6130 Freiwillige soziale Aufwendung. LSt-frei",
                      },
                      { content: "6805 Telefon" },
                      { content: "5902 Zinsaufwendungen DHB Bank" },
                      { content: "6110 Gesetzliche Sozialaufwendungen" },
                      {
                        content: "6304 Sonstige betriebl.u.regelm.Aufwendungen",
                      },
                      { content: "4401 Erlöse 19% USt" },
                      { content: "6020 Gehälter" },
                    ],
                  },
                  {
                    content: "CC Level 2",
                    type: "cc_level2",
                    value: [
                      { content: "Customer Success" },
                      { content: "CEO Office" },
                      { content: "Marketing" },
                      { content: null },
                      { content: "Cost of Service (COGS)" },
                      { content: "People & Organization" },
                      { content: "Revenue" },
                      { content: "Rev Ops" },
                      { content: "Gross Profit_1" },
                      { content: "Sales" },
                      { content: "Product & Engineering_300" },
                      { content: "Product & Engineering_1" },
                      { content: "CEO HR" },
                      { content: "Data System Engineering" },
                      { content: "General & Administrative_1" },
                      { content: "CEO_1" },
                      { content: "Product & Engineering_200" },
                      { content: "Sales & Marketing_1" },
                    ],
                  },
                  {
                    content: "CC Level 3",
                    type: "cc_level3",
                    value: [
                      { content: "4310 Mgmt Customer Success" },
                      { content: null },
                      { content: "4140 Events & Messen" },
                      { content: "4130 Content Marketing" },
                      { content: "1200 COGS" },
                      { content: "2220 People Operations" },
                      { content: "1100 Revenue" },
                      { content: "1000 Gross Profit" },
                      { content: "4100 Marketing" },
                      { content: "4200 Sales" },
                      { content: "3020 Team Internet Explorers" },
                      { content: "2240 Employer Branding" },
                      { content: "2230 Talent Acquisition" },
                      { content: "4230 Account Executives" },
                      { content: "4300 Customer Success" },
                      { content: "4340 Customer & Professional Service" },
                      { content: "3000 Product & Engineering" },
                      { content: "3010 Mgmt Product & Engineering" },
                      { content: "4110 Mgmt Marketing" },
                      { content: "2200 People & Organization" },
                      { content: "4220 Sales Development" },
                      { content: "4210 Mgmt Sales" },
                      { content: "4120 Growth Marketing" },
                      { content: "4320 Customer Success Management" },
                      { content: "2900 CEO HR" },
                      { content: "3100 Data System Engineering" },
                      { content: "2000 General & Administrative" },
                      { content: "3300 P&E" },
                      { content: "5000 CEO" },
                      { content: "3030 Team Daywalkers" },
                      { content: "3200 P&E" },
                      { content: "4330 Customer Implementation" },
                      { content: "4400 Customer Success" },
                      { content: "4000 Sales & Marketing" },
                      { content: "5010 Mgmt CEO" },
                      { content: "2210 Mgmt People & Organization" },
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
                      { content: "2017" },
                      { content: "2018" },
                      { content: "2019" },
                      { content: "2020" },
                      { content: "2021" },
                      { content: "2022" },
                      { content: "2023" },
                      { content: "2024" },
                      { content: "2025" },
                      { content: "2026" },
                    ],
                  },
                  {
                    content: "Month",
                    type: "month",
                    value: [
                      { content: "01" },
                      { content: "02" },
                      { content: "03" },
                      { content: "04" },
                      { content: "05" },
                      { content: "06" },
                      { content: "07" },
                      { content: "08" },
                      { content: "09" },
                      { content: "10" },
                      { content: "11" },
                      { content: "12" },
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
              { content: "Actual" },
              { content: "Forecast" },
              { content: "Budget" },
              {
                content: "Actual vs. Budget",
                value: [
                  { content: "Delta (%)" },
                  { content: "Delta (absolute)" },
                ],
              },
              {
                content: "Actual vs. Forecast",
                value: [
                  { content: "Delta (%)" },
                  { content: "Delta (absolute)" },
                ],
              },
              {
                content: "Forecast vs. Budget",
                value: [
                  { content: "Delta (%)" },
                  { content: "Delta (absolute)" },
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
            {!empty && <Table ref={ref} settings={settings} {...table} />}
            <Modal>
              <Settings close={close} properties={properties} {...settings} />
            </Modal>
          </article>
        </section>
      </div>
      <footer></footer>
    </div>
  );
};
