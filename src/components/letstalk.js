import React from "react";
import styled from "styled-components";

export const LetsTalk = () => {
  return (
    <Wrapper>
      <Text>
        Interested in adding some immersive pizazz to your organisation?{" "}
        <em>
          <a href="mailto:luke@heroentertainment.com">Let's talk</a>
        </em>
        .
      </Text>
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
  width: 70vw;
  /* text-align: left; */
  font-size: 3em;
  color: white;
  padding: 1em;
  font-family: "Noto Serif JP", serif;

  a {
    color: white;
    border-bottom: 1px solid transparent;
    transition: all 1s;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;
