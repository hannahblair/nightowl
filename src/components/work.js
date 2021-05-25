import React from "react";
import styled from "styled-components";

export const Work = () => {
  return (
    <Wrapper>
      <Text>We've built some cool things so far.</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
`;

const Text = styled.div`
  font-size: 3em;
  color: white;
  padding: 1em;
  font-family: "Noto Serif JP", serif;
`;
