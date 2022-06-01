import { forwardRef } from "react";

import use from "./hooks";

export default forwardRef(({ className }, ref) => {
  const { close, create } = use();

  return (
    <div className={className} ref={ref}>
      <h2>Settings</h2>
      <blockquote>
        <dl>
          <dt>Rows</dt>
          <dd>
            <nav>
              <h4>Actions:</h4>
              <ul>
                <li aria-roledescription="create">
                  <a href="/" title="Add new item" onClick={create}>
                    Add new item
                  </a>
                </li>
              </ul>
            </nav>
          </dd>
        </dl>
        <dl>
          <dt>Columns</dt>
          <dd>
            <nav>
              <h4>Actions:</h4>
              <ul>
                <li aria-roledescription="create">
                  <a href="/" title="Add new item" onClick={create}>
                    Add new item
                  </a>
                </li>
              </ul>
            </nav>
          </dd>
        </dl>
        <dl>
          <dt>Values</dt>
          <dd>
            <nav>
              <h4>Actions:</h4>
              <ul>
                <li aria-roledescription="create">
                  <a href="/" title="Add new item" onClick={create}>
                    Add new item
                  </a>
                </li>
              </ul>
            </nav>
          </dd>
        </dl>
      </blockquote>
    </div>
  );
});
