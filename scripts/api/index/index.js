import data from "data.json";

import { process } from "./helpers";

export default ({ body: { settings } }, response) =>
  response.json(process({ data, settings }));
