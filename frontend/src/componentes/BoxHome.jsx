import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 25%;
  height: 12%;
  border: 2px solid #ffff;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  @media screen and (min-width: 1281px) {
    width: 200px;
    height: 170px;
    padding-top: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 150px;
  }
`;
const ImagemBox = styled.img`
  @media screen and (min-width: 1281px) {
    width: 60%;
  }
  @media screen and (max-width: 767px) {
    width: 100px;
  }
`;
const Text = styled.p`
  margin: 5px;
  font-size: 40px;
  font-weight: normal;
  color: #ffff;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`;

const BoxHome = ({ image, texto }) => {
  return (
    <Box>
      <ImagemBox src={image} />
      <Text>{texto}</Text>
    </Box>
  );
};

export default BoxHome;
