import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce, slideInRight } from "react-animations";

import gljivaLogo from "../assets/gljiva.svg";
import { colors } from "../theme";

export default () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: colors.blue,
  };
  const titleStyle = {
    color: colors.yellowGold,
    paddingLeft: 10,
    fontStyle: "italic",
    fontSize: 33,
  };

  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
  `;
  const SlideInLeft = styled.div`
    animation: 7s ${keyframes`${slideInRight}`} infinite;
  `;

  return (
    <div>
      <div style={containerStyle}>
        <Bounce>
          <img src={gljivaLogo} alt="logo mushroom" width="90" height="90" />
        </Bounce>
        <SlideInLeft>
          <h1 style={titleStyle}>Misterije Gljivarenja</h1>
        </SlideInLeft>
      </div>
    </div>
  );
};
