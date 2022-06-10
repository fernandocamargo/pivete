import update from "immutability-helper";

export const set = (records) => (state) =>
  update(state, { records: { $set: records } });
