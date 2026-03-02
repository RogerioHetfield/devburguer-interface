import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right  {
        right: 15px;
        top: 10px;
    }

    padding-left: 40px;
`;

export const Title = styled.h2`
    font-size: 32px;
    color: #df4700;
    font-weight: 800;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 20px;
    padding-top: 20px;

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 56px;
        height: 4px;
        background-color: #df4700;
    }
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');

    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    height: 250px;
    width: 100%;
    padding: 20px 10px;
    border-radius: 25px;

`;

export const CategoryButton = styled(Link)`
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        padding: 10px 20px;
        border-radius: 32px;
        font-size: 22.5px;
        font-weight: 500;
        margin-top: 50px;
        text-decoration: none;

        &:hover {
            background-color: rgba(242, 98, 8, 0.7);
        }
        
`;