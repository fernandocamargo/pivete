import { forwardRef } from "react";

import use from "./hooks";
import Body from "./body";
import Head from "./head";

export default forwardRef(({ className, ...props }, ref) => {
  const { body, head } = use(props);

  return (
    <div className={className} ref={ref}>
      <table>
        <Head {...head} />
        <Body {...body} />
      </table>
    </div>
  );
});
