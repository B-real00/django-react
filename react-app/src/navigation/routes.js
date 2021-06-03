import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  HomeScreen,
  DetailScreen,
  ItemDetailScreen,
} from "../feature/home/screens";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeScreen}></Route>
    <Route exact path="/details" component={DetailScreen}></Route>
    <Route path="/details/:id" component={ItemDetailScreen}></Route>
  </Switch>
);

export { Routes };
