import isArray from "lodash/isArray";
import { useCallback, useMemo } from "react";

import { concat, get, verify } from "./helpers";

export default ({ settings, toggle, ...props }) => {
  const check = useCallback(
    (params) => {
      const deep = params.hasOwnProperty("value");
      const [axis, type, value] = [].concat(params.path).concat(params.value);
      const path = [axis, { type }].concat(deep ? ["value", [{ value }]] : []);

      return !!path.reduce(verify, settings);
    },
    [settings]
  );
  const iterate = useCallback(
    (
      object,
      inheritance = { path: { indexes: [], value: [] }, parent: null }
    ) => {
      const fill = (items = []) => ({ checked: false, items });
      const transform = (stack, current, index) => {
        const { content, type } = current;
        const { [type]: selection } = settings;
        const path = {
          indexes: inheritance.path.indexes.concat(index),
          value: inheritance.path.value.concat(type || []),
        };
        const uuid = path.indexes.join(".");
        const details = iterate(
          current.details,
          concat({ parent: current, path }, "details")
        );
        const value = iterate(
          current.value,
          concat({ parent: current, path }, "value")
        );
        const checked =
          check({ path: path.value, value: current.value }) || value.checked;
        const inherit = (item) => ({
          content: inheritance.parent.content,
          type: inheritance.parent.type,
          value: [item],
        });
        const resolve = () => {
          switch (true) {
            case !!type:
              return [inheritance.path.value, get(current)];
            case !isArray(current.value):
              return [path.value, inherit(current)];
            default:
              return [path.value, get(current.value)];
          }
        };
        const onChange = () => {
          const [target, source] = resolve();

          console.log({ path: target, value: source, checked });

          return toggle({ path: target, value: source, checked });
        };
        const next = {
          details: details.items,
          value: value.items,
          checked,
          content,
          onChange,
          selection,
          uuid,
        };
        const items = stack.items.concat(next);

        return { checked: stack.checked || checked, items };
      };

      return isArray(object) ? object.reduce(transform, fill()) : fill(object);
    },
    [check, settings, toggle]
  );
  const properties = useMemo(
    () => iterate(props.properties).items,
    [props.properties, iterate]
  );
  const close = useCallback(
    (event) => [event.preventDefault(), props.close()],
    [props]
  );

  return { close, properties };
};
