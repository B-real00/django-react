import React from "react";
import { NavLink } from "react-router-dom";

import { colors } from "../theme";

export default () => {
  const navStyle = {
    backgroundColor: colors.white,
  };

  const navTitle = {
    display: "inline",
    float: "left",
    paddingRight: 20,
  };
  const textStyle = {
    textDecoration: "none",
    color: colors.gray,
  };

  return (
    <nav style={navStyle}>
      <ul type="none">
        <li style={navTitle}>
          <NavLink
            activeStyle={{ color: colors.blue }}
            style={textStyle}
            exact
            to="/"
          >
            Početna
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: colors.blue }}
            style={textStyle}
            exact
            to="/details"
          >
            Detalji
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
