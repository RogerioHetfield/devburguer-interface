import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components";

export const Container = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Form = styled.form`
    border-radius: 20px;
    background-color: #f88a22;
    padding: 32px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Lable = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #000000;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    padding: 0 10px;
    border: none;
`;

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed #ccc;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    color: #ffffff;

    > svg {
        width: 20px;
        height: 20px;
        fill: #ffffff   ;
        margin-right: 4px;

    }

    input {
        display: none;
    }
`;

export const Select = styled(ReactSelect)`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const submitButton = styled(Button)`
    padding: 10px;
    border: none;
    border-radius: 7px;
    background-color: #df5900;
    color: #000000;
    cursor: pointer;
`;