import update from "immutability-helper";

export const load =
  ({ records }) =>
  (state) =>
    update(state, { records: { $set: records } });

export const toggle =
  ({ item, path }) =>
  (state) => {
    console.log({ item, path });

    switch (true) {
      default:
        return state;
    }
  };
