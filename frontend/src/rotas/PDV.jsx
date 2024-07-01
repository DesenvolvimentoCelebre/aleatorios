import Background from "../componentes/Background.jsx";
import styled from "styled-components";
import Produtos from "../componentes/Produtos.jsx";
import Resumo from "../componentes/Resumo.jsx";
import React, { useState, useEffect } from "react";
import apiAleatorios from "../axios/config";
import Modal from "react-modal";
import CampoTexto from "../componentes/CampoTexto.jsx";
import Botao from "../componentes/Botao.jsx";
import cerveja from "../img/Boemia.png";

const ContainerPdv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const Titulo = styled.h1`
  color: #fff;
`;

const Tab = styled.div`
  display: flex;
  gap: 200px;
  font-weight: normal;
  font-size: 12px;
  cursor: pointer;
`;

const TabItem = styled.div`
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  ${({ active }) =>
    active &&
    `
    font-weight: bold;
    border-bottom: 2px solid #fff;
  `}
`;

const BarraDePesquisa = styled.input`
  padding-left: 10px;
  width: 40%;
  margin: 10px 0;
  height: 30px;
  border-radius: 20px;
  color: #fff;
  background-color: #1f1e1e;
  border: #fff 1px solid;
`;
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
  flex-direction: column;
  align-items: center;
`;

const PDV = () => {
  const [quantidade, setQuatidade] = useState("");
  //Listando produtos da API
  const [tabAtivo, setTabAtivo] = useState("Produtos");
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const carregarEstoque = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await apiAleatorios.get("/api/stock/read", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProdutos(res.data.data);
      } catch (error) {
        console.log("Erro", error);
      }
    };
    carregarEstoque();
  }, []);
  //Terminando lista produtos da API

  //Logica de adico0nar o produto e abrir modal do adicionar produto
  const [modalAdicionarLista, setModalAdicionarLista] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [produtosAdicionados, setProdutosAdicionados] = useState([]);
  const adicionarProduto = () => {
    const produtoComQuantidade = {
      ...produtosAdicionados,
      quantidade: Number(quantidade),
    };
    setProdutosAdicionados((prevProdutos) => [
      ...prevProdutos,
      produtoComQuantidade,
    ]);
    setModalAdicionarLista(false);
  };
  console.log(produtosAdicionados);
  const abrirModalAdicionarLista = (produto) => {
    setProdutoSelecionado(produto);
    setModalAdicionarLista(true);
  };
  const fecharModalAdicioanrLista = () => {
    setProdutoSelecionado(null);
    setModalAdicionarLista(false);
  };
  //Terminadno logica de adico0nar o produto e abrir modal do adicionar produto
  return (
    <Background>
      <ContainerPdv>
        <Titulo>Ponto de Venda</Titulo>
        <Tab>
          <TabItem
            active={tabAtivo === "Produtos"}
            onClick={() => setTabAtivo("Produtos")}
          >
            <Titulo>Produtos</Titulo>
          </TabItem>
          <TabItem
            active={tabAtivo === "Resumo"}
            onClick={() => setTabAtivo("Resumo")}
          >
            <Titulo>Resumo</Titulo>
          </TabItem>
        </Tab>
        <BarraDePesquisa placeholder="Pesquise o codigo do produto" />
        {tabAtivo === "Produtos" && (
          <Produtos produtos={produtos} abrirModal={abrirModalAdicionarLista} />
        )}
        <Modal
          isOpen={modalAdicionarLista}
          onRequestClose={fecharModalAdicioanrLista}
          style={{
            content: {
              border: "5px solid #fff",
              width: "40%",
              height: "75%",
              margin: "auto",
              padding: 0,
              backgroundColor: "#000",
            },
          }}
        >
          {produtoSelecionado && (
            <div>
              <TituloEstoque>
                <h1>{produtoSelecionado.nome}</h1>
                <img src={cerveja} alt="" />
              </TituloEstoque>
              <InputEstoque>
                <CampoTexto
                  size="25px"
                  widthTablet="300px"
                  heighTablet="50%"
                  label="Quantidade"
                  corDoLabel="white"
                  type="text"
                  value={quantidade}
                  valorAlterado={(valor) => setQuatidade(valor)}
                />
                <CampoTexto
                  size="25px"
                  widthTablet="300px"
                  label="Valor Total"
                  corDoLabel="white"
                  type="number"
                  disabled={true}
                />
                <Botao onClick={adicionarProduto} padding="5px 55px">
                  Adicionar ao carrinho
                </Botao>
              </InputEstoque>
            </div>
          )}
        </Modal>
        {tabAtivo === "Resumo" && <Resumo />}
      </ContainerPdv>
    </Background>
  );
};

export default PDV;
