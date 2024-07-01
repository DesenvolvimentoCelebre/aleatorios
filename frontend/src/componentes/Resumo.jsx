import React from "react";
import styled from "styled-components";
import Background from "./Background.jsx";
import cerveja from "../img/Boemia.png";
import Botao from "./Botao.jsx";
const ContainerPdv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  .p-total {
    font-size: 20px;
    color: #fff;
    text-align: end;
    width: 69%;
    margin: 50px 0;
  }
`;
const Titulo = styled.h1`
  color: #fff;
`;
const Tab = styled.div`
  display: flex;
  gap: 200px;
  font-weight: normal;
  font-size: 12px;
`;
const Tabela = styled.table`
  width: 95%;
  border-collapse: collapse;
  border: none;
  table-layout: fixed;
  margin: auto;
  margin-top: 70px;

  th,
  td {
    border: none;
    padding: 10px;
    text-align: center;
    word-wrap: break-word;
    white-space: normal;
  }
  td,
  th {
    color: #261136;
    font-weight: 900;

    color: #fff;
  }
  img {
    width: 60px;
  }
  .img-p {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

const Resumo = () => {
  return (
    <Background>
      <ContainerPdv>
        <Titulo>Ponto de Venda</Titulo>
        <Tab>
          <Titulo>Produtos</Titulo>
          <Titulo>Resumo</Titulo>
        </Tab>
        <Tabela>
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Quantidade</td>
              <td>Valor</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="img-p">
                <img src={cerveja} alt="" />
                <p>Bohemia 300 ml</p>
              </td>
              <td>2</td>
              <td>R$10,00</td>
            </tr>
          </tbody>
        </Tabela>
        <p className="p-total">Valor Total: R$18,00</p>
        <Botao padding="5px 60px" fontSize="20px">
          Finalizar
        </Botao>
      </ContainerPdv>
    </Background>
  );
};

export default Resumo;
