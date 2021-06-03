import React, { useState, useEffect } from "react";

export default () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;

    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      // handlers to call on window resize
      function handleWidthResize() {
        // set width
        setWindowDimensions(getWindowDimensions());
      }
      // add event listener
      window.addEventListener("resize", handleWidthResize);
      // call handler after that to update the state
      handleWidthResize();

      // do the cleanup
      return () => window.removeEventListener("resize", handleWidthResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};
