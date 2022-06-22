import castArray from "lodash/castArray";
import isArray from "lodash/isArray";
import differenceBy from "lodash/differenceBy";
import isEqual from "lodash/isEqual";
import update from "immutability-helper";

export const load =
  ({ records }) =>
  (state) =>
    update(state, { records: { $set: records } });

export const toggle = ({ path: [axis, type], checked, value }) => {
  const resolve = (settings) => {
    const concat = () => settings.concat(value);
    const remove = () => differenceBy(settings, castArray(value), "type");
    const rehydrate = (stack, item) => {
      const skip = isEqual(item.type, type);

      return skip ? stack : stack.concat(item);
    };

    switch (true) {
      case isArray(value):
        return !checked ? concat() : remove();
      case !!type:
        return settings.reduce(rehydrate, []);
      case !type:
        return !checked ? concat() : remove();
      default:
        return settings;
    }
  };
  const reconcile = (state) =>
    update(state, { settings: { [axis]: { $apply: resolve } } });

  return reconcile;
};
