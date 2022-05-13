import property from "lodash/property";

export const fetch = () =>
  Promise.all([
    window
      .fetch("/assets/json/mock/data.json")
      .then(serialize)
      .then(property("data")),
    import("./mock").then(property("default")),
  ]);

export const serialize = (response) => response.json();

export const sum = (current) => (next) => current + next;
