/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import isArray from "lodash/isArray";
import isEqual from "lodash/isEqual";
import update from "immutability-helper";
import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { fetch, sum } from "./helpers";

export class Columns {
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
      const locate = ([
        axis,
        options,
        level = options.indexOf(type),
        head = !level,
        tail = isEqual(level + 1, options.length),
      ]) => !!~level && { axis, head, level, tail };
      const reset = () => update(current, { nodes: { $set: 0 } });
      const categorize = (stack, ...details) => stack || locate(...details);
      const location = Object.entries(settings).reduce(categorize, false);
      const depth = inheritance.depth + 1;
      const path = inheritance.path.concat(index);
      const uuid = { origin: path.join(".") };
      const { nodes, tree } = scan(details, { depth, path }, reset());
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

export default () => {
  const ref = useRef();
  const [[state, records], persist] = useState([[], { columns: [], rows: [] }]);
  const [settings] = useState({
    columns: ["year", "month", "itemtype"],
    rows: ["office_id", "cc_level1"],
  });
  const format = useCallback(
    (data) => {
      const parser = { columns: new Columns(settings) };
      const columns = parser.columns.scan(data.columns);

      return { columns };
    },
    [settings]
  );
  const recordset = useMemo(() => format(records), [format, records]);
  const ready = useMemo(() => !!state.length, [state]);

  useEffect(() => {
    fetch().then(persist);
  }, []);

  return { ready, ref, settings, ...recordset };
};

/*
  const scan = useCallback(
    (
      input,
      inheritance = { depth: 0, path: [] },
      output = {
        tree: { columns: [], rows: [] },
        nodes: 0,
      }
    ) => {
      const iterate = (current, { label, type, value }, index) => {
        const ref = createRef();
        const locate = ([
          axis,
          options,
          level = options.indexOf(type),
          head = !level,
          tail = isEqual(level + 1, options.length),
        ]) => !!~level && { axis, head, level, tail };
        const reset = () => update(current, { nodes: { $set: 0 } });
        const categorize = (stack, ...details) => stack || locate(...details);
        const location = Object.entries(settings).reduce(categorize, false);
        const depth = inheritance.depth + 1;
        const path = inheritance.path.concat(index);
        const head = !path.slice(0, settings.rows.length).filter(Boolean)
          .length;
        const uuid = { origin: path.join(".") };
        const { nodes, tree } = scan(value, { depth, path }, reset());
        const increment = sum(Math.max(nodes, 1));
        const concat = (fragments = []) =>
          fragments.concat({
            depth,
            head,
            label,
            location,
            nodes,
            ref,
            type,
            uuid,
          });
        const reconcile = () => {
          switch (location.axis) {
            case "columns":
              console.log(uuid.origin, { label, head });

              return update(tree, {
                ...(head && {
                  columns: { [location.level]: { $apply: concat } },
                }),
                ...(!head && {
                  rows: { [location.level]: { $apply: concat } },
                }),
              });
            default:
              return tree;
          }
        };

        return update(current, {
          nodes: { $apply: increment },
          tree: { $apply: reconcile },
        });
      };

      return isArray(input) ? input.reduce(iterate, output) : output;
    },
    [settings]
  );
  */
