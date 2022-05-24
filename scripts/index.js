import express from "express";

import * as API from "./api";

export default express().use(express.json()).post("/", API.index).listen(1337);
