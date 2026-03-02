import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position: relative;

    div {
        display: flex;
        width: 100%;
        height: 80px;
        justify-content: space-between;
        flex-direction: column;
    }

    p {
        font-size: 16px;
        font-weight: 700;
        color: #ff8c05;
        line-height: 20px;
        margin-top: 40px;
    }

    strong {
        font-size: 18px;
        font-weight: 900;
        color: #363636;
        line-height: 20px;
    }
`;  

export const CardImage = styled.img`
    height: 120px;
    position: absolute;
    top: -50px;
    left: 50%;
`;