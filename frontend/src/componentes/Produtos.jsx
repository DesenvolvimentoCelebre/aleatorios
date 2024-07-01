import styled from "styled-components";
import cerveja from "../img/Boemia.png";

const Tab = styled.div`
  display: flex;
  gap: 50px;
  font-weight: normal;
`;

const Titulo = styled.p`
  color: #fff;
  background-color: #1f1e1e;
  border: #fff 1px solid;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
  width: 40%;
  height: 100%;
  gap: 65px;
  margin-bottom: 2%;
`;

const Produto = styled.div`
  display: flex;
  flex-direction: column;
  width: 90px;
  align-items: center;
  cursor: pointer;

  img {
    width: 100px;
  }
  h2 {
    color: #fff;
    font-size: 15px;
  }
  p {
    color: #fff;
    margin: 0;
    font-size: 10px;
  }
`;

const Produtos = ({ produtos, abrirModal }) => {
  return (
    <>
      <Tab>
        <Titulo>Mais Vendidos</Titulo>
        <Titulo>Bar 1</Titulo>
        <Titulo>Bar 2</Titulo>
        <Titulo>Bebidas</Titulo>
        <Titulo>Do Chefe</Titulo>
        <Titulo>Cozinha</Titulo>
      </Tab>
      <ContainerProdutos>
        {produtos.map((produto) => (
          <Produto key={produto.id} onClick={() => abrirModal(produto)}>
            <img src={cerveja} alt={produto.nome} />
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco} Un</p>
          </Produto>
        ))}
      </ContainerProdutos>
    </>
  );
};

export default Produtos;
