import get from "lodash/get";
import isFunction from "lodash/isFunction";
import setWith from "lodash/setWith";
import updateWith from "lodash/updateWith";

export const apply = (source, [path, value]) => {
  const method = isFunction(value) ? updateWith : setWith;

  return method(source, path, value, Object);
};

export const assign = (source, transformations) =>
  transformations.reduce(apply, source);

export const process = ({ data, settings }) => {
  const scan = (input, record) => {
    const iterate = (stack, type, index) => {
      const { [type]: property } = record;
      const content = String(property).trim();
      const prefix = { columns: !!index ? "details" : [] };
      const folder = {
        columns: stack.path.tree.columns.concat(prefix.columns),
      };
      const indexes = stack.path.indexes.concat(content);
      const paths = {
        indexes: {
          columns: get(
            stack.input,
            indexes,
            get(stack.input, folder.columns).length
          ),
        },
      };
      const tree = { columns: folder.columns.concat(paths.indexes.columns) };
      const concat = (cache) => cache || { content, type, details: [] };

      return {
        input: assign(stack.input, [
          [indexes, paths.indexes.columns],
          [tree.columns, concat],
        ]),
        path: { indexes, tree },
      };
    };

    return settings.columns.reduce(iterate, {
      path: { indexes: ["indexes"], tree: { columns: ["tree", "columns"] } },
      input,
    }).input;
  };
  const response = data.reduce(scan, {
    tree: { columns: [], rows: [] },
    indexes: {},
  });

  return response.tree;
};
