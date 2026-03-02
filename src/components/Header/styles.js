import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background-color: #1f1f1f;
    width: 100%;
    height: 72px;
`;  

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        margin-left: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        align-items: center;
    }

    hr {
        height: 24px;
        border: 1px solid #df4700;
    }
`;

export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive ? '#df4700' : '#ffffff'};
    border-bottom: ${props => props.$isActive ? '1px solid #df4700' : 'none'};
    padding-bottom: 5px;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
        color: #df4700;
    }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 12px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p {
        color: #ffffff;
        line-height: 90%;
        font-weight: 300;
    }

    span {
        color: #df4700;
        font-weight: 800;
    }
`;

export const Logout = styled.button`
   color: #df0000;
   text-decoration: none;
   background-color: transparent;
   border: none;
   cursor: pointer;
   font-size: 14px;
   font-weight: 700;
`;
