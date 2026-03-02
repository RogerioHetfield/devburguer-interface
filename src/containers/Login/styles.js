import styled from "styled-components";
import BackgroundLogin from "../../assets/background3.png";
import Background from "../../assets/background4.png";
import { Link as ReactLink} from "react-router-dom";

export const Container = styled.div`
    display: flex; 
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}') ;
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%  
    };
`;

export const RightContainer = styled.div`
    background: url('${Background}') ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
   background-color:  gray;
    background-size: cover;
    background-position: center;

    p {
        color: #fff;
        margin-top: 20px;
        font-size: 18px;
        font-weight: 600;
    }

    a {
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
    }

`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    font-size: 50px;
    color: #000000;

    span {
        color: #df7e00;
        font-family: "Road Rage", sans-serif;
    }

    #sabor {
        color: #ffffff;
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        padding: 0 16px;
        border: none;
        height: 52px;
        border-radius: 5px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

    p {
        color: #000000;
        margin-top: 5px;
        font-size: 14px;
        font-weight: 600;
        line-height: 80%;
        height: 10px;
    }
`;


export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #ffffff;
`;