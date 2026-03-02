import styled from "styled-components";

export const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
background: rgb(179, 48, 8);
border: none;
color: #fff;
padding: 10px 14px;
border-radius: 20px;
font-size: 20px;
cursor: pointer;
z-index: 1000;

&:hover {
background: rgba(204, 85, 1, 0.8);
}
`;