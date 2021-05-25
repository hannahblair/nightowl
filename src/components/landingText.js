import React from "react";
import styled from "styled-components";

export const LandingText = () => {
  return (
    <Wrapper>
      <Text>
        We're an early stage <WavyUnderline>creative studio</WavyUnderline>{" "}
        building immersive experiences for education. We're driven by{" "}
        <em>social impact</em>, <strong>purpose</strong>, and, most importantly,
        fun. 👀
      </Text>
    </Wrapper>
  );
};

const WavyUnderline = styled.div`
  border-bottom: 1px dashed white;
  width: max-content;
  display: inline;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.div`
  font-size: 5em;
  color: white;
  padding: 1em;
  font-family: "Noto Serif JP", serif;
`;
