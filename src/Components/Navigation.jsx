import styled from "styled-components";
import { ContainerWrapper } from "./ContainerWrapper";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Button } from "./Button";

const Nav = styled.nav`
  background-color: var(--dark-green-15);
  color: var(--green-97);
  border-bottom: 1px solid var(--green-90);
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const BrandLogo = styled(Link)`
  display: block;
  width: 147px;
  & > * {
    display: block;
    width: 100%;
  }
  @media screen and (min-width: 1440px){
    width: 195px;
  }

`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  width: 34px;
  height: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 8.5px 4.5px;
  span {
    width: 100%;
    height: 3px;
    border-radius: 25px;
    background-color: var(--green-70);
  }

  span:last-child {
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  background: var(--dark-green-15);
  width: 100vw;
  padding: 0 18px;
  color: var(--green-97);
  position: absolute;
  top: 75px;
  left: 0;

  a {
    margin: 4px 0;
  }

  a:hover:not(:last-child),
  a.active:not(:last-child) {
    color: var(--green-70);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: unset;
    a {
        margin-right: 20px;
    }
  }

  @media screen and (min-width: 1920px) {
    a {
      font-size: 18px;
      margin-right: 26px;
    }
  }
`;


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <ContainerWrapper>
          <NavWrapper>
            <BrandLogo to="">
              <img src={Logo} alt="Nutritionist Logo" />
            </BrandLogo>
            <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerMenu>
            <NavItem isOpen={isOpen}>
              <NavLink to="">Home</NavLink>
              <NavLink to="team">Team</NavLink>
              <NavLink to="process">Process</NavLink>
              <NavLink to="pricing">Pricing</NavLink>
              <NavLink to="blog">Blog</NavLink>
              <Button href="contact">Contact Us</Button>
            </NavItem>
          </NavWrapper>
        </ContainerWrapper>
      </Nav>
    </>
  );
};
