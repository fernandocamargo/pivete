import property from "lodash/property";
import { post } from "axios";

export const fetch = (params) => post("/", params).then(property("data"));
