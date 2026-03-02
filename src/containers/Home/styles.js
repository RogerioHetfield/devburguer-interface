import styled from "styled-components";
import Background from "../../assets/background4.png";
import BannerHome from "../../assets/background5.png";

export const Banner = styled.div`
  position: relative;
  background: url(${BannerHome});
  background-size: cover;
  background-position: center;
  height: 480px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45); /* controla o escuro */
    z-index: 1;
  }

  h1 {
    color: #ffffff;
    font-size: 80px;
    font-family: 'Road Rage', cursive;
    position: absolute;
    right: 20%;
    top: 14%;
    z-index: 2;
  }
`;

export const Container = styled.section`
    background: linear-gradient( rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)),
    url('${Background}');
    height: 85 0px;
`;

export const Content = styled.div`
/* padding-bottom: 30px; */
`;