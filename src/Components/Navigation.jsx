import styled from "styled-components"
import { ContainerWrapper } from "./ContainerWrapper"
import { GlobalStyles } from "../Utils/GlobalStyle"
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
    background-color: var(--dark-green-15);
    color: var(--green-97);
`

const NavWrapper = styled(ContainerWrapper)`

`

const NavItem = styled.div`

`

const Nav_link = styled(NavLink)`

`




export const Navigation = () => {

    return <>
        <GlobalStyles />
        <Nav>
            <NavWrapper>
                <NavItem>
                    <Nav_link to="">Home</Nav_link>
                    <Nav_link to="team">Team</Nav_link>
                    <Nav_link to="process">Process</Nav_link>
                    <Nav_link to="pricing">Pricing</Nav_link>
                    <Nav_link to="blog">Blog</Nav_link>
                </NavItem>
            </NavWrapper>
        </Nav>
    </>
}