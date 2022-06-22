import find from "lodash/find";
import isArray from "lodash/isArray";
import isPlainObject from "lodash/isPlainObject";

export const concat = ({ path: { indexes, value }, parent }, fragment) => ({
  path: { indexes: indexes.concat(fragment), value },
  parent,
});

export const get = (input, output = []) => {
  const format = ({ content, type }) => ({ value: [], content, type });
  const extract = (stack, item) =>
    item.type ? stack.concat(format(item)) : get(item.value, stack);

  return isArray(input) ? input.reduce(extract, output) : format(input);
};

export const verify = (stack, criteria) => {
  switch (true) {
    case !stack:
      return stack;
    case isArray(criteria):
      return !stack.length || find(stack, ...criteria);
    case isPlainObject(criteria):
      return find(stack, criteria);
    default:
      return stack?.[criteria];
  }
};
