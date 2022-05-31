import get from "lodash/get";
import isEqual from "lodash/isEqual";
import isFunction from "lodash/isFunction";
import setWith from "lodash/setWith";
import updateWith from "lodash/updateWith";

export const apply = (source, [path, value]) => {
  const handle = isFunction(value) ? updateWith : setWith;

  return handle(source, path, value, Object);
};

export const analyze = (input, [axis, items]) => {
  const distribute = (output, [key, value]) => {
    const index = Number(key);

    return Object.assign(output, { [value]: { axis, index } });
  };

  return Object.entries(items).reduce(distribute, input);
};

export const assign = (source, transformations = []) =>
  transformations.reduce(apply, source);

export const extract = (settings) => {
  const { columns, rows } = settings;
  const last = rows.length - 1;
  const fields = [].concat(rows.slice(0, last), columns, rows.slice(-1));
  const axes = Object.entries(settings).reduce(analyze, {});
  const validate = (type) => isEqual(type, rows[last]);

  return { axes, fields, validate };
};

export const process = ({ data, ...params }) => {
  console.clear();
  console.time("process");

  const { axes, fields, validate } = extract(params.settings);
  const scan = (input, record) => {
    const iterate = (output, type, index) => {
      const {
        [type]: { axis },
      } = axes;
      const { [type]: property } = record;
      const content = String(property).trim();
      const restore = (cache) => cache || { content, type, details: [] };
      const folder = output.path.tree.rows.concat(!!index ? "details" : []);
      const indexes = output.path.indexes.rows.concat(content);
      const { length } = get(output.input, folder);
      const path = get(output.input, indexes, length);
      const tree = folder.concat(path);

      return {
        input: assign(output.input, [
          [indexes, path],
          [tree, restore],
        ]),
        path: assign(output.path, [
          [["indexes", "rows"], indexes],
          [["tree", "rows"], tree],
        ]),
      };
    };

    return fields.reduce(iterate, {
      path: {
        indexes: { columns: ["indexes", "columns"], rows: ["indexes", "rows"] },
        tree: { columns: ["tree", "columns"], rows: ["tree", "rows"] },
      },
      input,
    }).input;
  };
  const response = data.slice(0, 10).reduce(scan, {
    indexes: { columns: {}, rows: {} },
    tree: { columns: [], rows: [] },
  });
  /*
  const calculate = (input, { content, type, ...node }) => {
    const { details, total } = validate(type)
      ? { total: Number(content) }
      : node.details.reduce(calculate, { details: [], total: 0 });
    const concat = (tree) => tree.concat({ content, details, type, total });
    const increment = (value) => total + value;

    return assign(input, [
      ["details", concat],
      ["total", increment],
    ]);
  };
  const summary = response.tree.reduce(calculate, { details: [], total: 0 });
  */

  console.timeEnd("process");

  // return summary.details;

  return response.tree;
};
