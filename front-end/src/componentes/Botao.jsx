import styled from "styled-components";

const Button = styled.button`
  background-color: #ffffff;
  border-radius: 30px;
  font-weight: 700;
  font-size: ${(props) => props.fontSize || "30px"};
  padding: ${(props) => props.padding || "20px 120px"};
  border: none;
  cursor: pointer;
  color: #000000;
  margin: auto;
  margin-top: 70px;
  display: block;

  &:hover {
    background-color: #242323;
    color: #ffffff;
    border-radius: 50px;
  }
  @media screen and (min-width: 1024px) {
    padding: ${(props) => props.padding || "10px 100px"};
    margin-top: 30px;
  }
  @media screen and (max-width: 767px) {
    padding: ${(props) => props.padding || "10px 80px"};
    margin-top: 25px;
  }
`;
const Botao = (props) => {
  return (
    <Button padding={props.padding} fontSize={props.fontSize}>
      {props.children}
    </Button>
  );
};
export default Botao;
