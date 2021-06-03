import React, { useState, useEffect } from "react";
import axios from "axios";

import { colors } from "../../../theme";
import { apiUri } from "../../../config";
import { Author, ImageGallery } from "../../../components";

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const result = await axios.get(apiUri + "home/");

      setData(result.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const container = {
    backgroundColor: colors.black,
    color: colors.white,
    minHeight: "100vh",
    display: "flex",
  };
  const textStyle = {
    fontSize: 21,
    textAlign: "justify",
    margin: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 20,
    lineHeight: 1.6,
    wordSpacing: 3,
  };

  const titleStyle = {
    fontStyle: "italic",
    textShadow: `4px 4px 5px gray`,
    fontSize: 39,
  };

  const galleryAuthorStyle = {
    textAlign: "center",
    marginTop: -10,
    paddingBottom: 20,
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={container}>
      {data.map((item) => (
        <div key={item.id}>
          <div style={textStyle}>
            <h1 style={titleStyle}>{item.title}</h1>
            <p>{item.body}</p>
            <Author author={item.author} />
          </div>

          <ImageGallery />
          <div style={galleryAuthorStyle}>
            <Author author={item.author_image} />
          </div>
        </div>
      ))}

      <h1>{data.title}</h1>
    </div>
  );
};
