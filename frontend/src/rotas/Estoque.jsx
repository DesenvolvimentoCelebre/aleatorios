import React, { useState, useEffect } from "react";
import { GrAddCircle } from "react-icons/gr";
import Tabela from "../componentes/Tabela.jsx";
import Background from "../componentes/Background.jsx";
import BarraDePesquisaComBotao from "../componentes/BarraDePesquisaComBotao.jsx";
import apiAleatorios from "../axios/config.js";
import Modal from "react-modal";
import styled from "styled-components";
import agua from "../img/agua.png";
import CampoTexto from "../componentes/CampoTexto.jsx";
import Botao from "../componentes/Botao.jsx";
import { toast } from "react-toastify";
const TituloEstoque = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #fff;
    font-size: 30px;
  }
  img {
    width: 150px;
    height: 150px;
  }
`;
const InputEstoque = styled.div`
  display: flex;
  margin-left: 10%;
`;

const Estoque = (props) => {
  //Listando produtos
  const coluna = ["ID", "Categoria", "Nome", "Saldo", ""];
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const carregarEstoque = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await apiAleatorios.get("/api/stock/read", {
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
    carregarEstoque();
  }, []);
  const dadosFormatados = dados.map((item) => ({
    ID: item.id,
    Nome: item.nome,
    Saldo: item.saldo,
    Categoria: item.categoria,
    "": <GrAddCircle size={30} style={{ cursor: "pointer" }} />,
  }));
  //Terminando de Lista produtos

  //Inciando criação de states e funçõ0es de mo0dal add produto
  const [modalAdicionandoProduto, setModalAdicionadnoProduto] = useState(false);
  const abrirModalAdicionarProduto = () => {
    setModalAdicionadnoProduto(true);
  };
  const fecharModalAdicionarProduto = () => {
    setModalAdicionadnoProduto(false);
  };

  // Adicionando Produto
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [saldo, setSaldo] = useState("");
  const [preco_custo, setPreco_Custo] = useState("");

  const cadastrarProduto = async (e) => {
    e.preventDefault();

    try {
      const produtoCadastrado = {
        nome,
        categoria,
        saldo,
        preco_custo,
      };
      const res = await apiAleatorios.post("api/stock/send", produtoCadastrado);
      if (res.status === 201) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <Background>
        <BarraDePesquisaComBotao
          divWidth="80%"
          inputWidth="40%"
          butonWidth="40%"
          fontButon="17px"
          onClick={abrirModalAdicionarProduto}
        >
          Adicionar
        </BarraDePesquisaComBotao>
        <Modal
          isOpen={modalAdicionandoProduto}
          onRequestClose={fecharModalAdicionarProduto}
          style={{
            content: {
              border: "5px solid #fff",
              width: "60%",
              height: "50%",
              margin: "auto",
              padding: 0,
              backgroundColor: "#000",
            },
          }}
        >
          <TituloEstoque>
            <h1>ADICIONAR PRODUTO</h1>
          </TituloEstoque>
          <InputEstoque>
            <CampoTexto
              size="25px"
              widthTablet="300px"
              heighTablet="50%"
              label="Produto"
              corDoLabel="white"
              type="text"
              value={nome}
              valorAlterado={(valor) => setNome(valor)}
            />
            <CampoTexto
              size="25px"
              widthTablet="300px"
              label="Saldo"
              corDoLabel="white"
              type="number"
              value={saldo}
              valorAlterado={(valor) => setSaldo(valor)}
            />
          </InputEstoque>
          <InputEstoque>
            <CampoTexto
              size="25px"
              widthTablet="300px"
              label="Preço"
              corDoLabel="white"
              type="number"
              value={preco_custo}
              valorAlterado={(valor) => setPreco_Custo(valor)}
            />
            <CampoTexto
              size="25px"
              widthTablet="300px"
              label="Categoria"
              corDoLabel="white"
              type="number"
              value={categoria}
              valorAlterado={(valor) => setCategoria(valor)}
            />
          </InputEstoque>
          <Botao padding="5px 55px" onClick={cadastrarProduto}>
            Adicionar
          </Botao>
        </Modal>
        <Tabela coluna={coluna} dados={dadosFormatados} />
      </Background>
      ;
    </>
  );
};

export default Estoque;
