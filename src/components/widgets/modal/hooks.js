/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import isEqual from "lodash/isEqual";
import { useEffect } from "react";

import { ESC } from "constants/keyboard";

export default ({ onClick: click }) =>
  useEffect(() => {
    const press = (event) => isEqual(event.keyCode, ESC) && click(event);

    // document.addEventListener("click", click, false);
    document.addEventListener("keydown", press, false);

    return () => [
      // document.removeEventListener("click", click, false),
      document.removeEventListener("keydown", press, false),
    ];
  }, [click]);
