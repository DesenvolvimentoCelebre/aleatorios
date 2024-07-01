import React from "react";
import Background from "../componentes/Background.jsx";
import styled from "styled-components";
import CampoTexto from "../componentes/CampoTexto.jsx";
import { useState } from "react";
import Botao from "../componentes/Botao.jsx";
import apiAleatorios from "../axios/config.js";
import { toast } from "react-toastify";

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
  const [nome_usuario, setNome_Usuario] = useState("");
  const [senha, setSenha] = useState("");

  const inputSizes = {
    pequeno: { width: "300px", height: "30px", fontSize: "20px" },
    grande: { width: "450px", height: "35px", fontSize: "25px" },
  };

  const cadastrarUsuario = async (e) => {
    e.preventDefault();

    try {
      const usarioCadastrado = {
        nome,
        cargo,
        cpf,
        nome_usuario,
        senha,
      };
      const res = await apiAleatorios.post("api/user", usarioCadastrado);
      if (res.status === 201) {
        toast.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <Background>
      <ContainerCadastro>
        <TituloCadastro>CADASTRO DE USUÁRIO</TituloCadastro>
        <Form onSubmit={(e) => cadastrarUsuario(e)}>
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
            value={nome_usuario}
            valorAlterado={(valor) => setNome_Usuario(valor)}
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
