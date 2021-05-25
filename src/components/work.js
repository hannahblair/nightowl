import React from "react";
import styled from "styled-components";

export const Work = () => {
  return (
    <Wrapper>
      <Text>We've built some cool things so far.</Text>
      <div>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="500px"
          height="500px"
          viewBox="0 0 500 500"
          enable-background="new 0 0 500 500"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            stroke="red"
            id="red"
            stroke-opacity="0"
            d="M179.38 313.55A94.65 94.65 0 0 1 155  250a95 95 0 1 1 95 95 94.6 94.6 0 0 1-60.33-21.6"
          />
          <Text>
            <textPath
              xlinkHref="#red"
              class="text1"
              startOffset="30%"
              fill="white"
            >
              this part
            </textPath>
          </Text>

          <path
            fill="none"
            stroke="green"
            stroke-opacity="0"
            id="green"
            stroke-miterlimit="10"
            d="M145 350a144.5 144.5 0 0 1-40-100c0-80.08 64.92-145 145-145s145 64.92 145 145-64.92 145-145 145c-33.15 0-63.7-11.12-88.12-29.84"
          />
          <Text>
            <textPath
              xlinkHref="#green"
              class="text2"
              startOffset="25%"
              fill="white"
            >
              working on
            </textPath>
          </Text>

          <path
            fill="none"
            stroke="blue"
            stroke-opacity="0"
            id="blue"
            stroke-miterlimit="10"
            d="M114.16 382.84A189.38 189.38 0 0 1 60 250c0-104.94 85.06-190 190-190 104.93 0 190 85.06 190 190 0 104.93-85.07 190-190 190-45.35 0-87-15.9-119.66-42.4"
          />
          <Text>
            <textPath
              xlinkHref="#blue"
              class="text3"
              startOffset="20%"
              fill="white"
            >
              we're currently
            </textPath>
          </Text>
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh);

  .text1,
  .text2,
  .text3 {
    color: white;
  }
`;

const Text = styled.text`
  font-size: 2em;
  color: white;
  padding: 2em;
  font-family: "Noto Serif JP", serif;
`;
