import React from "react";

import { Card } from "../../../components";
import { WindowSize } from "../../../hooks";

export default ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const { height, width } = WindowSize();

  const container = {
    display: "flex",
    flexDirection: width > 768 ? "row" : "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
  };

  const imageContainer = {
    height: "auto",
    maxHeight: 300,
    width: "auto",
    maxWidth: 300,
  };

  return (
    <div style={container}>
      {data.map((item) => (
        <Card
          pathname={`/details/${item.id}`}
          state={{ items: item }}
          key={item.id}
          title={item.title}
        >
          <img src={item.image} style={imageContainer} />
        </Card>
      ))}
    </div>
  );
};
