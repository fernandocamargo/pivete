/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import isArray from "lodash/isArray";
import isEqual from "lodash/isEqual";
import last from "lodash/last";
import update from "immutability-helper";
import { createRef } from "react";

import { sum } from "helpers/number";

export default class {
  constructor(settings) {
    this.axis = "rows";
    this.settings = settings;
  }

  scan = (
    input,
    inheritance = { depth: 0, path: [] },
    output = { tree: [], nodes: 0 }
  ) => {
    const { axis, scan, settings } = this;
    const iterate = (current, { content, details, type, value }, index) => {
      const ref = createRef();
      const reset = () => update(current, { nodes: { $set: 0 } });
      const categorize = (stack, ...params) => stack || locate(...params);
      const locate = ([
        axis,
        options,
        level = options.indexOf(type),
        head = !level,
        tail = isEqual(level + 1, options.length),
      ]) => !!~level && { axis, head, level, tail };
      const location = Object.entries(settings).reduce(categorize, false);
      const countable = isEqual(location.axis.toLowerCase(), axis);
      const depth = inheritance.depth + 1;
      const parent = last(inheritance.path);
      const path = inheritance.path.concat(index);
      const uuid = { origin: path.join(".") };
      const { nodes, tree } = scan(details || value, { depth, path }, reset());
      const increment = sum(Math.max(nodes, 1));
      const concat = (fragments = []) =>
        fragments.concat({
          content,
          depth,
          location,
          nodes,
          ref,
          type,
          uuid,
        });
      const reconcile = () => {
        const {
          tree: { length },
        } = current;

        switch (true) {
          case countable:
            return update(tree, { [length]: { $unshift: concat() } });
          case location.tail && !nodes && !parent && !index:
            return update(tree, { $push: [concat()] });
          case location.tail && !nodes:
            return update(tree, { [length - 1]: { $apply: concat } });
          default:
            return tree;
        }
      };

      return update(current, {
        ...(countable && { nodes: { $apply: increment } }),
        tree: { $apply: reconcile },
      });
    };

    return isArray(input) ? input.reduce(iterate, output) : output;
  };
}
