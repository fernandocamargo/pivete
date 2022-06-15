import find from "lodash/find";
import isPlainObject from "lodash/isPlainObject";

export const concat = ({ indexes, value }, fragment) => ({
  path: { indexes: indexes.concat(fragment), value },
});

export const verify = (stack, criteria) =>
  isPlainObject(criteria) ? find(stack, criteria) : stack?.[criteria];
