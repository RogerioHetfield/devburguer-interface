import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  background-color: #313131;

  img {
    width: 60%;
    margin: 60px 50px;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  text-decoration: none;
  color: #fff;
  background-color: ${({ $isActive }) => ($isActive ? "#df4700" : "transparent")};

  &:hover {
    background-color: #e86c33;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
`;