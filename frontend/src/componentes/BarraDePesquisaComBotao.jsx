import React from "react";
import styled from "styled-components";
const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;
const DivInput = styled.div`
  background-color: #fff;
  width: 50%;
  height: 30px;
  border-radius: 20px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    width: ${(props) => props.divWidth};
  }
`;
const Input = styled.input`
  width: 35%;
  background-color: #000;
  color: #fff;
  border-radius: 20px;
  padding: 10px;

  @media screen and (max-width: 767px) {
    width: ${(props) => props.inputWidth};
  }
`;
const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 20px;
  border-radius: 20px;
  width: 30%;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: ${(props) => props.butonWidth};
    font-size: ${(props) => props.fontButon};
  }
`;
const BarraDePesquisaComBotao = (props) => {
  return (
    <ContainerInput>
      <DivInput divWidth={props.divWidth}>
        <Input inputWidth={props.inputWidth} />
        <Button butonWidth={props.butonWidth} fontButon={props.fontButon}>
          {" "}
          {props.children}
        </Button>
      </DivInput>
    </ContainerInput>
  );
};

export default BarraDePesquisaComBotao;
