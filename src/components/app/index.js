import React from "react";
import { App } from "./app";
import { hot } from "react-hot-loader";

export default (process.env.NODE_ENV === "development"
  ? hot(module)(App)
  : App);
