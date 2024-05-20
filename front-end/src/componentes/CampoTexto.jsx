import React from "react";
import styled from "styled-components";

const LoginForm = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  color: ${(props) => props.cor};
  margin: 10px;
  font-size: ${(props) => props.font};
  align-self: flex-start;

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.font};
  }
  @media screen and (max-width: 767px) {
    font-size: ${(props) => props.font};
  }
`;
const Input = styled.input`
  width: ${(props) => props.width || "660px"};
  border-radius: 30px;
  padding-left: 18px;
  font-size: 30px;
  @media screen and (min-width: 1024px) {
    width: ${(props) => props.width || "660px"};
    height: ${(props) => props.height || "50px"};
  }
  @media screen and (max-width: 767px) {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;
const CampoTexto = (props) => {
  const valorDigitado = (e) => {
    props.valorAlterado(e.target.value);
  };
  return (
    <>
      <LoginForm>
        <Label cor={props.corDoLabel} font={props.size}>
          {props.label}
        </Label>
        <Input
          height={props.height}
          width={props.width}
          type={props.type}
          required={props.obrigatorio}
          onChange={valorDigitado}
          value={props.valor}
        />
      </LoginForm>
    </>
  );
};

export default CampoTexto;
