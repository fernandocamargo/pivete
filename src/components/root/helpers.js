import { property } from "lodash";

export const fetch = () =>
  Promise.all([
    window
      .fetch("/assets/json/mock/data.json")
      .then(serialize)
      .then(property("data")),
    import("./mock").then(property("default")),
  ]);

export const parse = (stack, item, index) => {
  const group = (stack, [name, value], _index) => {
    const current = stack.indexes.values?.[name] || {};
    const collection = current?.[value] || [];
    const next = collection.concat(index);

    return {
      indexes: {
        fields: Object.assign(stack.indexes.fields, { [name]: _index }),
        values: Object.assign(stack.indexes.values, {
          [name]: Object.assign(current, { [value]: next }),
        }),
      },
    };
  };

  return Object.entries(item).reduce(group, stack);
};

export const serialize = (response) => response.json();
