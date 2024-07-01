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
  width: ${(props) => props.widthDesktop || "660px"};
  border-radius: 30px;
  padding-left: 18px;
  font-size: 30px;

  @media screen and (max-width: 767px) {
    width: ${(props) => props.widthMobile};
    height: ${(props) => props.heightMobile};
  }
  @media screen and (min-width: 1024px) {
    width: ${(props) => props.widthTablet};
    height: ${(props) => props.heightTablet};
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
          widthMobile={props.widthMobile}
          heightMobile={props.heightMobile}
          widthTablet={props.widthTablet}
          heightTablet={props.heightTablet}
          height={props.height}
          width={props.width}
          type={props.type}
          required={props.obrigatorio}
          onChange={valorDigitado}
          value={props.valor}
          disabled={props.disabled}
        />
      </LoginForm>
    </>
  );
};

export default CampoTexto;
