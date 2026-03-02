import styled from "styled-components";
import BannerHamburguer from '../../assets/banner-hamburguer.svg';
import Background from "../../assets/background4.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
background: linear-gradient( rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)),
    url('${Background}');
    height: 85 0px;
    width: 100%; 
    min-height: 100vh;
    background-color: #f0f0f0;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background-image: url('${BannerHamburguer}');
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 60px;   
        color: #fff;
        position: absolute;

        right: 20%;
        top: 10%;
    }

    span {
        display: block;
        color: #fff;
        font-size: 20px;

    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${ (props) => props.$isActiveCategory ? '#ec6002' : '#363535'};
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px; 
    border: none;
    border-bottom: ${ (props) => props.$isActiveCategory && '3px solid #ec6002'};
    
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto 0;
`;