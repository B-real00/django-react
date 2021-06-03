import React from "react";
import { colors } from "../theme";

export default ({ children }) => {
  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    height: 50,
  };

  return (
    <div style={footerStyle}>
      <p>{children}</p>
    </div>
  );
};
