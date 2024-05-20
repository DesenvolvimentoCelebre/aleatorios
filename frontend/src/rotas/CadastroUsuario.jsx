import React from "react";
import Background from "../componentes/Background";
import styled from "styled-components";
import CampoTexto from "../componentes/CampoTexto";
import { useState } from "react";
import Botao from "../componentes/Botao";

const ContainerCadastro = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const TituloCadastro = styled.p`
  color: white;
  font-size: 40px;
  @media screen and (min-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;
const Form = styled.form`
  @media screen and (min-width: 1024px) {
    height: 100%;
  }
`;
const CadastroUsuario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [cpf, setCpf] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const inputSizes = {
    pequeno: { width: "300px", height: "30px", fontSize: "20px" },
    grande: { width: "450px", height: "35px", fontSize: "25px" },
  };
  return (
    <Background>
      <ContainerCadastro>
        <TituloCadastro>CADASTRO DE USUÁRIO</TituloCadastro>
        <Form>
          <CampoTexto
            size="25px"
            height={inputSizes.pequeno.height}
            width={inputSizes.pequeno.width}
            corDoLabel="white"
            label="Nome"
            type="text"
            obrigatorio={true}
            value={nome}
            valorAlterado={(valor) => setNome(valor)}
          />
          <CampoTexto
            height={inputSizes.pequeno.height}
            width={inputSizes.pequeno.width}
            size="25px"
            corDoLabel="white"
            label="Cargo"
            type="text"
            obrigatorio={true}
            value={cargo}
            valorAlterado={(valor) => setCargo(valor)}
          />
          <CampoTexto
            height={inputSizes.pequeno.height}
            width={inputSizes.pequeno.width}
            size="25px"
            corDoLabel="white"
            label="CPF"
            type="text"
            obrigatorio={true}
            value={cpf}
            valorAlterado={(valor) => setCpf(valor)}
          />
          <CampoTexto
            height={inputSizes.pequeno.height}
            width={inputSizes.pequeno.width}
            size="25px"
            corDoLabel="white"
            label="Usuário"
            type="text"
            obrigatorio={true}
            value={usuario}
            valorAlterado={(valor) => setUsuario(valor)}
          />
          <CampoTexto
            height={inputSizes.pequeno.height}
            width={inputSizes.pequeno.width}
            size="25px"
            corDoLabel="white"
            label="Senha"
            type="password"
            obrigatorio={true}
            value={senha}
            valorAlterado={(valor) => setSenha(valor)}
          />
          <Botao padding="5px 55px" fontSize="20px">
            CADASTRAR
          </Botao>
        </Form>
      </ContainerCadastro>
    </Background>
  );
};

export default CadastroUsuario;
