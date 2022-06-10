/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { forwardRef } from "react";

import Details from "./details";

export const renderDetails = (details, index) => (
  <Details key={index} {...details} />
);

/*
    <details>
      <summary>Accounting data</summary>
      <details>
        <summary>Dimensions</summary>
        <form>
          <fieldset>
            <legend>
              <label>
                <input type="checkbox" /> <span>Departments</span>
              </label>
            </legend>
            <details>
              <summary>See details</summary>
              <label>
                <input type="checkbox" /> <span>All</span>
              </label>
            </details>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>
              <label>
                <input type="checkbox" /> <span>Account</span>
              </label>
            </legend>
            <details>
              <summary>See details</summary>
              <label>
                <input type="checkbox" /> <span>All</span>
              </label>
              <label>
                <input type="checkbox" /> <span>Vem quente</span>
              </label>
            </details>
          </fieldset>
        </form>
      </details>
    </details>
    <details>
      <summary>Employee data</summary>
    </details>
    <details>
      <summary>Customer data</summary>
    </details>
    <details>
      <summary>Timeline</summary>
    </details>
*/

export default forwardRef(({ className, details }, ref) => (
  <div className={className} ref={ref}>
    {details.map(renderDetails)}
  </div>
));
