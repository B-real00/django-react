import React, { useState } from "react";
import { Link } from "react-router-dom";

import { colors } from "../theme";

export default ({ title, children, pathname, state }) => {
  const [color, setColor] = useState("white");

  const cardContainer = {
    backgroundColor: color,
    borderRadius: 6,
    height: "45%",
    width: "45%",
    height: "auto",
    width: "auto",
    padding: 30,
    margin: 30,
  };
  const titleStyle = {
    color: colors.black,
    textAlign: "center",
    textShadow: `2px 2px 3px gray`,
  };

  return (
    <div
      style={cardContainer}
      onMouseEnter={() => setColor(colors.grayLight)}
      onMouseLeave={() => setColor(colors.white)}
    >
      <Link to={{ pathname, state }} style={{ textDecoration: "none" }}>
        <div style={titleStyle}>
          <h3>{title}</h3>
        </div>
        <div>{children}</div>
      </Link>
    </div>
  );
};
