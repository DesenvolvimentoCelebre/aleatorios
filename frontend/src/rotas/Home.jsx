import React from "react";
import Background from "../componentes/Background.jsx";
import BoxHome from "../componentes/BoxHome.jsx";
import estoque from "../img/estoque.png";
import styled from "styled-components";
import usuario from "../img/usuario.png";
import relatorio from "../img/relatorio.png";
import pdv from "../img/pdv.png";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/listar-estoque">
            <BoxHome image={estoque} texto="Estoque" />
          </NavLink>
          <NavLink to="/listar-usuarios">
            <BoxHome image={usuario} texto="Usuários" />
          </NavLink>
        </Row>
        <Row>
          <BoxHome image={relatorio} texto="Relatório" />
          <NavLink to="/pdv">
            <BoxHome image={pdv} texto="PDV" />
          </NavLink>
        </Row>
      </FlexBox>
    </Background>
  );
};

export default Home;
