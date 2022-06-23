import update from "immutability-helper";

import { reverse } from "helpers/boolean";

export const toggle = () => (state) =>
  update(state, { open: { $apply: reverse } });
