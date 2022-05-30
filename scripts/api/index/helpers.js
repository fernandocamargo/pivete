import get from "lodash/get";
import isEqual from "lodash/isEqual";
import isFunction from "lodash/isFunction";
import setWith from "lodash/setWith";
import updateWith from "lodash/updateWith";

export const apply = (source, [path, value]) => {
  const handle = isFunction(value) ? updateWith : setWith;

  return handle(source, path, value, Object);
};

export const assign = (source, transformations = []) =>
  transformations.reduce(apply, source);

export const extract = ({ columns, rows }) => {
  const last = rows.length - 1;
  const fields = [].concat(rows.slice(0, last), columns, rows.slice(-1));
  const validate = (type) => isEqual(type, rows[last]);

  return { fields, validate };
};

export const process = ({ data, ...params }) => {
  console.clear();
  console.time("process");

  const { validate, fields } = extract(params.settings);
  const scan = (input, record) => {
    const iterate = (output, type, index) => {
      const { [type]: property } = record;
      const content = String(property).trim();
      const restore = (cache) => cache || { content, type, details: [] };
      const folder = output.path.tree.concat(!!index ? "details" : []);
      const indexes = output.path.indexes.concat(content);
      const { length } = get(output.input, folder);
      const path = get(output.input, indexes, length);
      const tree = folder.concat(path);

      return {
        input: assign(output.input, [
          [indexes, path],
          [tree, restore],
        ]),
        path: { indexes, tree },
      };
    };

    return fields.reduce(iterate, {
      path: { indexes: ["indexes"], tree: ["tree"] },
      input,
    }).input;
  };
  const response = data.reduce(scan, { indexes: {}, tree: [] });
  const calculate = (input, { content, type, ...node }) => {
    const { details, value } = validate(type)
      ? { value: Number(content) }
      : node.details.reduce(calculate, { details: [], value: 0 });
    const concat = (tree) => tree.concat({ content, details, type, value });
    const increment = (total) => total + value;

    return assign(input, [
      ["details", concat],
      ["value", increment],
    ]);
  };
  const summary = response.tree.reduce(calculate, { details: [], value: 0 });

  console.timeEnd("process");

  return summary;
};
