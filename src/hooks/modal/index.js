/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import isEqual from "lodash/isEqual";
import { createElement, useCallback, useRef, useState } from "react";

import { Modal } from "components/widgets";

import * as reducers from "./reducers";

export default (settings = { open: false }) => {
  const ref = useRef();
  const [state, set] = useState(settings);
  const close = useCallback(() => set(reducers.close()), []);
  const open = useCallback(() => set(reducers.open()), []);
  const click = useCallback(
    ({ target }) => {
      const closeable =
        !isEqual(target, ref.current) && !ref.current?.contains(target);

      return closeable && close();
    },
    [close]
  );
  const Container = useCallback(
    (props) => state.open && createElement(Modal, { onClick: click, ...props }),
    [state.open, click]
  );

  return { Container, close, open, ref };
};
