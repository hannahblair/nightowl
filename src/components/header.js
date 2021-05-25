import React from "react";
import styled from "styled-components";

export const Header = () => (
  <Banner>
    <HeaderText>nightowl studio 🦉 </HeaderText>
  </Banner>
);

const Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  height: 2rem;
  padding: 2rem;
`;

const HeaderText = styled.div`
  font-family: "Varela Round", sans-serif;
  font-size: 1.5rem;
  color: white;
`;
