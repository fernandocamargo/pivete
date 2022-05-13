import { Fragment as StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Root } from "components";
import { measure } from "tools";

export const initialize = () =>
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Root />
    </StrictMode>
  );

export default document.fonts.ready
  .then(initialize)
  .then(measure.bind(this, process.env.DEBUGGING && console.log));
