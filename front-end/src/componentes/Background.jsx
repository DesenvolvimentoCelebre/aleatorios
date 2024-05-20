import styled from "styled-components";
import logo from "../img/logo.png";
const ImgBackground = styled.div`
  background-image: url(${logo});
  background-size: 750px;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgb(0, 0, 0);
  @media screen and (max-width: 767px) {
    background-size: 350px 150px;
  }
`;
const CorBackgrounf = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  height: 100%;
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Background = ({ children }) => {
  return (
    <ImgBackground>
      <CorBackgrounf />
      <Content>{children}</Content>
    </ImgBackground>
  );
};

export default Background;
