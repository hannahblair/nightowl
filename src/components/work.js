import React from "react";
import styled from "styled-components";
import { Carousel } from "./carousel";

import oceans from "../images/2oceans.png";
import download from "../images/download.png";
import edge from "../images/edge.png";

export const Work = () => {
  return (
    <Wrapper>
      <Text>We've built some cool things so far.</Text>
      <Carousel />

      <Text>And have worked with great companies</Text>

      <div>
        <Logo src={oceans} />
        <Logo src={download} />
        <Logo src={edge} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh);

  .text1,
  .text2,
  .text3 {
    color: white;
  }
`;

const Logo = styled.img`
  margin: 20px;
  filter: brightness(3) grayscale(105%);
  width: 200px;
`;

const Text = styled.div`
  font-size: 2em;
  color: white;
  padding: 2em;
  font-family: "Noto Serif JP", serif;
  display: block;
`;
