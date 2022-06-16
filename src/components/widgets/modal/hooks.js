import isEqual from "lodash/isEqual";
import { useEffect } from "react";

import { ESC } from "constants/keyboard";

export default ({ onClick: click }) =>
  useEffect(() => {
    const press = (event) => isEqual(event.keyCode, ESC) && click(event);
    const connect = () => {
      document.addEventListener("click", click, false);
      document.addEventListener("keydown", press, false);
    };
    const disconnect = () => [
      document.removeEventListener("click", click, false),
      document.removeEventListener("keydown", press, false),
    ];

    return window.setTimeout(connect) && disconnect;
  }, [click]);
