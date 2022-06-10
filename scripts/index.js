import express from "express";

import * as API from "./api";

export default express()
  .use(express.json())
  .post("/", API.index)
  .get("/dimensions", API.dimensions)
  .listen(1337);
