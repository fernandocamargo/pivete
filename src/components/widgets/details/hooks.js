import { useEffect, useRef, useState } from "react";

export default ({ summary, ...props }) => {
  const ref = useRef();
  const [{ open }, persist] = useState({ open: props.open });

  useEffect(() => {
    const { current: element } = ref;
    const toggle = ({ target }) => persist({ open: target.open });

    element.addEventListener("toggle", toggle, false);

    return () => element.removeEventListener("toggle", toggle, false);
  }, []);

  return { open, ref, summary };
};
