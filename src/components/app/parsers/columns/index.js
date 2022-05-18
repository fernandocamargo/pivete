/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import isArray from "lodash/isArray";
import isEqual from "lodash/isEqual";
import update from "immutability-helper";
import { createRef } from "react";

import { sum } from "helpers/number";

export default class {
  constructor(settings) {
    this.settings = settings;
  }

  scan = (
    input,
    inheritance = { depth: 0, path: [] },
    output = { tree: [], nodes: 0 }
  ) => {
    const { scan, settings } = this;
    const iterate = (current, { content, details, type }, index) => {
      const ref = createRef();
      const reset = () => update(current, { nodes: { $set: 0 } });
      const categorize = (stack, ...details) => stack || locate(...details);
      const locate = ([
        axis,
        options,
        level = options.indexOf(type),
        head = !level,
        tail = isEqual(level + 1, options.length),
      ]) => !!~level && { axis, head, level, tail };
      const location = Object.entries(settings).reduce(categorize, false);
      const depth = inheritance.depth + 1;
      const path = inheritance.path.concat(index);
      const uuid = { origin: path.join(".") };
      const { nodes, tree } = scan(details, { depth, path }, reset());
      const increment = sum(Math.max(nodes, 1));
      const concat = (fragments = []) =>
        fragments.concat({
          head: true,
          content,
          depth,
          location,
          nodes,
          ref,
          type,
          uuid,
        });
      const reconcile = () =>
        update(tree, { [location.level]: { $apply: concat } });

      return update(current, {
        nodes: { $apply: increment },
        tree: { $apply: reconcile },
      });
    };

    return isArray(input) ? input.reduce(iterate, output) : output;
  };
}
