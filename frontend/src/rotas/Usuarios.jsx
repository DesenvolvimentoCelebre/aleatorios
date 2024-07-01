import React, { useState, useEffect } from "react";
import Tabela from "../componentes/Tabela.jsx";
import Background from "../componentes/Background.jsx";
import BarraDePesquisaComBotao from "../componentes/BarraDePesquisaComBotao.jsx";

import apiAleatorios from "../axios/config.js";

const Usuarios = () => {
  const coluna = ["ID", "Nome", "Cargo", "Usuário"];
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const carregarUsarios = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await apiAleatorios.get("/api/alluser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Sucesso", res.data.data);
        setDados(res.data.data);
      } catch (error) {
        console.log("Erro", error);
      }
    };
    carregarUsarios();
  }, []);

  const dadosFormatados = dados.map((item) => ({
    ID: item.id,
    Nome: item.nome,
    Cargo: item.cargo,
    Usuário: item.nome_usuario,
  }));

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

        <Tabela coluna={coluna} dados={dadosFormatados} />
      </Background>
      ;
    </>
  );
};

export default Usuarios;
