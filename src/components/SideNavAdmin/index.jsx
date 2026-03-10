import { SignOutIcon } from "@phosphor-icons/react";
import { navLinks } from "./navLinks";
import { useResolvedPath } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import { Container, NavLinkContainer, NavLink, Footer } from "./styles";
import { useUser } from "../../hooks/UserContext";


export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  console.log(pathname);

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <NavLinkContainer>
        {navLinks.map(link => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOutIcon />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}