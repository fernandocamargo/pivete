/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import isArray from "lodash/isArray";
import { useCallback, useMemo } from "react";

export const concat = ({ indexes, value }, fragment) => ({
  path: { indexes: indexes.concat(fragment), value },
});

export default ({ settings, toggle, ...props }) => {
  const validate = useCallback(
    (...fragments) => {
      const path = [].concat(...fragments);
      const scan = (stack) => stack;
      const report = path.reduce(scan, { collection: settings, status: false });

      console.log(path);

      return report.status;
    },
    [settings]
  );
  const check = useCallback(
    ({ item, path }) => {
      switch (true) {
        case !item.hasOwnProperty("value"):
          return false;
        case isArray(item.value):
          return !!item.value.length;
        default:
          return validate(path.value, item.value);
      }
    },
    [validate]
  );
  const iterate = useCallback(
    (object, inheritance = { path: { indexes: [], value: [] } }) => {
      const transform = (item, index) => {
        const { content, type } = item;
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
    [check, toggle]
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
