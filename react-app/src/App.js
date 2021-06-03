import React, { Fragment } from "react";

import { Header, Navigation } from "./components";
import { Routes } from "./navigation/routes";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Routes />
    </Fragment>
  );
}

export default App;
