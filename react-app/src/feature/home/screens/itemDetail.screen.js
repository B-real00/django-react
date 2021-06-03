import React from "react";
import { useLocation } from "react-router-dom";

import { colors } from "../../../theme";
import { WindowSize } from "../../../hooks";
import { Author } from "../../../components";

export default () => {
  const { state } = useLocation();

  const { height, width } = WindowSize();

  const container = {
    backgroundColor: colors.black,
    minHeight: "100vh",
    height: "auto",
  };

  const titleStyle = {
    color: colors.white,
    padding: 30,
    textShadow: `4px 4px 5px ${colors.gray}`,
    backgroundColor: colors.yellowGold,
  };

  const rowContainer = {
    display: "flex",
    justifyContent: "space-between",
    padding: 30,
    flexDirection: width > 780 ? "row" : "column",
    alignItems: "center",
    color: colors.white,
  };

  const bodyStyle = {
    padding: 30,
    textAlign: "justify",
    color: colors.white,
    lineHeight: 1.6,
    wordSpacing: 3,
    fontSize: 21,
  };

  const authorText = {
    display: "flex",
    flexDirection: "row",
    color: colors.white,
    paddingLeft: 30,
    marginTop: -30,
  };

  return (
    <div style={container}>
      <div style={titleStyle}>
        <h1>{state.items.title}</h1>
      </div>
      <div style={rowContainer}>
        <img
          src={state.items.image}
          alt={state.items.title}
          height={"35%"}
          width={"35%"}
        />
        {width < 780 && <Author author={state.items.author} />}

        <div style={bodyStyle}>
          <p>{state.items.body}</p>
        </div>
      </div>

      {width > 780 && (
        <div style={authorText}>
          <Author author={state.items.author} />
        </div>
      )}
    </div>
  );
};
