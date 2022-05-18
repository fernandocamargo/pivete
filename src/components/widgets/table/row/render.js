import { forwardRef } from "react";

export default forwardRef(({ children }, ref) => <tr ref={ref}>{children}</tr>);
