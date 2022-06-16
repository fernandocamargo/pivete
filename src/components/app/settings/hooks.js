import isArray from "lodash/isArray";
import { useCallback, useMemo } from "react";

import { concat, verify } from "./helpers";

export default ({ settings, toggle, ...props }) => {
  const translate = useCallback(
    (value) => ({ null: "Not known" }[value] || value),
    []
  );
  const validate = useCallback(
    (params) => {
      const [axis, type, value] = [].concat(params.path).concat(params.value);
      const path = [axis, { type }].concat(
        params.hasOwnProperty("value") ? ["value", { value }] : []
      );

      return path.reduce(verify, settings);
    },
    [settings]
  );
  const check = useCallback(
    ({ item, path }) => {
      switch (true) {
        case !item.hasOwnProperty("value"):
          return false;
        case isArray(item.value):
          return !!validate({ path: path.value });
        default:
          return !!validate({ path: path.value, value: item.value });
      }
    },
    [validate]
  );
  const iterate = useCallback(
    (object, inheritance = { path: { indexes: [], value: [] } }) => {
      const transform = (item, index) => {
        const { type } = item;
        const content = translate(item.content);
        const path = {
          indexes: inheritance.path.indexes.concat(index),
          value: inheritance.path.value.concat(type || []),
        };
        const reconcile = (node) => {
          const { [node]: field } = item;

          return field && iterate(field, concat(path, node));
        };
        const uuid = path.indexes.join(".");
        const details = reconcile("details");
        const value = reconcile("value");
        const checked = check({ item, path });
        const onChange = () => toggle({ item, path });

        return { checked, content, details, onChange, uuid, value };
      };

      return isArray(object) ? object.map(transform) : object;
    },
    [check, toggle, translate]
  );
  const properties = useMemo(
    () => iterate(props.properties),
    [props.properties, iterate]
  );
  const close = useCallback(
    (event) => [event.preventDefault(), props.close()],
    [props]
  );

  return { close, properties };
};
