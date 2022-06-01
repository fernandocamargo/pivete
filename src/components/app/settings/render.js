import { forwardRef } from "react";

import use from "./hooks";
import Property from "./property";

export default forwardRef(({ className, ...props }, ref) => {
  const { close } = use(props);

  return (
    <div className={className} ref={ref}>
      <h2>Settings</h2>
      <nav>
        <h4>Actions:</h4>
        <ul>
          <li>
            <a href="/" title="Close settings" onClick={close}>
              Close settings
            </a>
          </li>
        </ul>
      </nav>
      <blockquote>
        <Property label="Rows" />
        <Property label="Columns" />
        <Property label="Values" />
      </blockquote>
    </div>
  );
});
