/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useCallback } from "react";

import { useModal } from "hooks";
import { Table } from "components/widgets";

import use from "./hooks";
import Header from "./header";
import Settings from "./settings";

export default ({ className }) => {
  const { ready, ref, settings, ...table } = use();
  const { Container: Modal, open, ...modal } = useModal({ open: true });
  const configure = useCallback(
    (event) => [event.preventDefault(), open()],
    [open]
  );

  return ready ? (
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
            <Modal>
              <Settings ref={modal.ref} {...settings} />
            </Modal>
          </article>
        </section>
      </div>
      <footer></footer>
    </div>
  ) : (
    "Loading..."
  );
};
