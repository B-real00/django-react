import React from "react";

export default ({ author }) => {
  const textStyle = {
    wordSpacing: 3,
    fontSize: 17,
    fontFamily: "cursive",
    fontStyle: "italic",
    fontWeight: "lighter",
    color: "wite",
  };
  return (
    <div style={textStyle}>
      <p>Autor {author}</p>
    </div>
  );
};
