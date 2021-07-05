import React from "react";
import styled from "styled-components";
import { Carousel } from "./carousel";

export const Work = () => {
  return (
    <Wrapper>
      <Text>We've built some cool things so far.</Text>
      <Carousel />
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

const Text = styled.div`
  font-size: 2em;
  color: white;
  padding: 2em;
  font-family: "Noto Serif JP", serif;
  display: block;
`;
