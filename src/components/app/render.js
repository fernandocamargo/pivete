/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { Table } from "components/widgets";

import use from "./hooks";

export default ({ className }) => {
  const { ready, ref, settings, ...table } = use();

  return ready ? (
    <div className={className}>
      <header>
        <h2>
          <a href="/" title="Pectus Finance">
            Pectus Finance
          </a>
          <span> proudly presents:</span>
        </h2>
        <nav>
          <h4>Browse through:</h4>
          <ul>
            <li aria-roledescription="upload">
              <a href="/" title="Data Upload">
                Data Upload
              </a>
            </li>
            <li aria-roledescription="controlling">
              <a href="/" title="Controlling">
                Controlling
              </a>
            </li>
            <li aria-current="page" aria-roledescription="builder">
              <a href="/" title="Report Builder">
                Report Builder
              </a>
            </li>
            <li aria-roledescription="workspaces">
              <a href="/" title="Workspaces">
                Workspaces
              </a>
            </li>
            <li aria-roledescription="mappings">
              <a href="/" title="Data Mapping">
                Data Mapping
              </a>
            </li>
            <li aria-roledescription="kpi">
              <a href="/" title="KPI Builder">
                KPI Builder
              </a>
            </li>
            <li aria-roledescription="reports">
              <a href="/" title="Reports">
                Reports
              </a>
            </li>
            <li aria-roledescription="settings">
              <a href="/" title="Setttings">
                Setttings
              </a>
              <ul>
                <li aria-roledescription="notifications">
                  <a href="/" title="See notifications">
                    <abbr title="110">See notifications</abbr>
                  </a>
                </li>
                <li aria-roledescription="profile">
                  <a href="/" title="Profile">
                    <abbr title="M">Profile</abbr>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <form>
          <fieldset>
            <legend>Search</legend>
            <div>
              <label htmlFor="keywords">Keywords</label>
              <input
                type="text"
                id="keywords"
                name="keywords"
                placeholder="Search for keywords, workspaces etc. "
              />
            </div>
          </fieldset>
        </form>
      </header>
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
                <a href="/" title="Configure">
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
          <Table ref={ref} settings={settings} {...table} />
        </section>
      </div>
      <footer></footer>
    </div>
  ) : (
    "Loading..."
  );
};
