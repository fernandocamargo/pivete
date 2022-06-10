/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import data from "data.json";

import { process } from "./helpers";

export default (_, response) => response.json(process(data).occurrences);
