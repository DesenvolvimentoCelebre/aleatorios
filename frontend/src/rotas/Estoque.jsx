import React from "react";
import { GrAddCircle } from "react-icons/gr";
import Tabela from "../componentes/Tabela";
import Background from "../componentes/Background";
import BarraDePesquisaComBotao from "../componentes/BarraDePesquisaComBotao";

const Estoque = () => {
  const coluna = ["ID", "Categoria", "Nome", "Saldo", ""];
  const dados = [
    ["1", "Quantidade", "Amstel", "25", <GrAddCircle size={22} />],
  ];
  return (
    <>
      <Background>
        <BarraDePesquisaComBotao
          divWidth="80%"
          inputWidth="40%"
          butonWidth="40%"
          fontButon="17px"
        >
          Adicionar
        </BarraDePesquisaComBotao>
        <Tabela coluna={coluna} dados={dados} />
      </Background>
      ;
    </>
  );
};

export default Estoque;
