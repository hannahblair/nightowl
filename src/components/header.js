import React from "react";
import styled from "styled-components";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export const Header = () => (
  <Banner>
    <HeaderText>night owl studio 🦉 </HeaderText>
    <div style={{ margin: "2rem" }}>
      <Social onClick={() => window.alert("sike! we dont have a twitter")}>
        <FaTwitter />
      </Social>
      <Social onClick={() => window.alert("sike! we dont have an instagram")}>
        <FaInstagram />
      </Social>
    </div>
  </Banner>
);

const Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: black;
`;

const Social = styled.div`
  margin: 10px;
  display: inline;
  color: white;
`;

const HeaderText = styled.div`
  font-family: "Varela Round", sans-serif;
  font-size: 1.5rem;
  color: white;
  margin: 2rem;
`;
