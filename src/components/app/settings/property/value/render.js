import { forwardRef } from "react";

import Details from "./details";

export const renderDetails = (details, index) => (
  <Details key={index} {...details} />
);

export default forwardRef(({ className, details }, ref) => (
  <div className={className} ref={ref}>
    {details.map(renderDetails)}
  </div>
));
