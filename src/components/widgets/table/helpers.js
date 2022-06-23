import isArray from "lodash/isArray";
import set from "lodash/set";

export const calculate = (columns, indexes = {}) => {
  const iterate = (stack, { content, type, ...column }) => {
    const { [content]: value = 0 } = indexes;
    const values = calculate(column.details, value);
    const properties = values ? { values } : { value };

    return stack.concat({ content, type, ...properties });
  };

  return isArray(columns) ? columns.reduce(iterate, []) : columns;
};

export const index = (input, output = {}) => {
  const iterate = (stack, { content, value, values }) =>
    Object.assign(stack, { [content]: values ? index(values) : value });

  return isArray(input) ? input.reduce(iterate, output) : output;
};

export const situate = (input, [axis, items]) => {
  const catalog = (output, { type }, index) => set(output, [axis, type], index);

  return items.reduce(catalog, input);
};
