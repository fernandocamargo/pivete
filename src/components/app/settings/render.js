import { forwardRef } from "react";

import use from "./hooks";
import Property from "./property";

export const renderProperty = (property) => (
  <Property key={property.type} {...property} />
);

export default forwardRef(({ className, ...props }, ref) => {
  const { close, properties } = use(props);

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
      <blockquote>{properties.map(renderProperty)}</blockquote>
    </div>
  );
});
