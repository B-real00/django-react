import React, { useState, useEffect } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { apiUri } from "../config";
import { WindowSize } from "../hooks";
import "../styles.css";

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // get the data
  useEffect(async () => {
    try {
      setLoading(true);
      const result = await axios.get(apiUri + "gallery/");

      const img = result.data.map((item) => <img src={item.image} />);
      setData(img);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //get the window size
  const { height, width } = WindowSize();

  const container = {
    height: 500,
    width: width,
  };
  const imageStyle = {
    width: "100%",
    height: 400,
    objectFit: "cover",
  };

  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={container} className="gallery-wrapper">
      <AliceCarousel
        items={data}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
        style={imageStyle}
      />
    </div>
  );
};
