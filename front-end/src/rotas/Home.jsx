import React from "react";
import Background from "../componentes/Background";
import BoxHome from "../componentes/BoxHome";
import estoque from "../img/estoque.png";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 90px;
  margin-top: 35%;
  @media screen and (min-width: 1281px) {
    gap: 40px;
    margin-top: 10%;
  }
  @media screen and (max-width: 768px) {
    gap: 40px;
    margin-top: 110px;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 150px;
  @media screen and (min-width: 1281px) {
    gap: 90px;
  }
  @media screen and (max-width: 767px) {
    gap: 40px;
  }
`;

const Home = () => {
  return (
    <Background>
      <FlexBox>
        <Row>
          <BoxHome image={estoque} texto="Teste" />
          <BoxHome image={estoque} texto="Teste" />
        </Row>
        <Row>
          <BoxHome image={estoque} texto="Teste" />
          <BoxHome image={estoque} texto="Teste" />
        </Row>
      </FlexBox>
    </Background>
  );
};

export default Home;
