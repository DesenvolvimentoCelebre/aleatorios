import React from "react";
import Tabela from "../componentes/Tabela";
import Background from "../componentes/Background";
import BarraDePesquisaComBotao from "../componentes/BarraDePesquisaComBotao";

const Usuarios = () => {
  const coluna = ["ID", "Nome", "Cargo", "Usuário"];
  const dados = [["1", "Karolina", "Caixa", "Karolina.almeida"]];

  return (
    <>
      <Background>
        <BarraDePesquisaComBotao
          divWidth="80%"
          inputWidth="40%"
          butonWidth="40%"
          fontButon="17px"
        >
          Criar Usuario
        </BarraDePesquisaComBotao>
        <Tabela coluna={coluna} dados={dados} />
      </Background>
      ;
    </>
  );
};

export default Usuarios;
