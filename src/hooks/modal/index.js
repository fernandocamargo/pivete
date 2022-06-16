import isEqual from "lodash/isEqual";
import {
  cloneElement,
  createElement,
  useCallback,
  useRef,
  useState,
} from "react";

import { Modal } from "components/widgets";

import * as reducers from "./reducers";

export default (settings = { open: false }) => {
  const ref = useRef();
  const [state, set] = useState(settings);
  const close = useCallback(
    () => !!state.open && set(reducers.close()),
    [state.open]
  );
  const open = useCallback(
    () => !state.open && set(reducers.open()),
    [state.open]
  );
  const click = useCallback(
    ({ target }) => {
      const closeable =
        !isEqual(target, ref.current) && !ref.current?.contains(target);

      return closeable && close();
    },
    [close]
  );
  const connect = useCallback(
    ({ children, ...props }) => ({
      children: cloneElement(children, { ref }),
      onClick: click,
      ...props,
    }),
    [click]
  );
  const Container = useCallback(
    (props) => state.open && createElement(Modal, connect(props)),
    [state.open, connect]
  );

  return { Container, close, open };
};
