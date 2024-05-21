import CampoTexto from "../componentes/CampoTexto";
import Botao from "../componentes/Botao";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../img/logo.png";
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Josefin Sans', serif;
    margin: 0;
    padding: 0;
    background-color: #000000;
;
  }
`;
const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LogoLogin = styled.img`
  margin-bottom: 100px;
  width: 700px;
  @media screen and (min-width: 1024px) {
    width: 500px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 767px) {
    width: 300px;
    margin-bottom: 40px;
  }
`;

const Form = styled.form``;

const TelaLogin = (props) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <GlobalStyle />
      <ContainerLogin>
        <LogoLogin src={logo} alt="Logo da empresa" />
        <Form>
          <CampoTexto
            widthMobile="300px"
            heightMobile="30px"
            widthTablet="500px"
            heighTablet="40px"
            size="20px"
            corDoLabel="white"
            label="Usuário"
            type="text"
            obrigatorio={true}
            value={usuario}
            valorAlterado={(valor) => setUsuario(valor)}
          />
          <CampoTexto
            widthMobile="300px"
            heightMobile="30px"
            widthTablet="500px"
            heighTablet="40px"
            size="20px"
            corDoLabel="white"
            label="Senha"
            type="password"
            obrigatorio={true}
            value={senha}
            valorAlterado={(valor) => setSenha(valor)}
          />
          <Botao padding="2px 50px">Login</Botao>
        </Form>
      </ContainerLogin>
    </>
  );
};

export default TelaLogin;
