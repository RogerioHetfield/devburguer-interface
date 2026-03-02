import styled from "styled-components";
import Texture from "../../assets/texture.png";
import Background from "../../assets/background4.png";

export const Container = styled.div`
    width: 100%;
    background: linear-gradient( rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)),
        url('${Background}');
    background: url(${Background});
    min-height: 100vh;
    background-size: cover;
    background-position: center;
`;

export const Banner = styled.div`
    background: url(${Texture});
    background-color: #ba4d12;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

    img {
        height: 140px;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: rgb(255, 89, 0);
    position: relative;
    text-align: center;
    background-color: #c3c2c1;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        background-color: rgb(255, 89, 0);
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 25%;
    gap: 40px;
    width: 100%;
    min-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`;
