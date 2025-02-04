import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkButton = styled(Link)`
    background: var(--green-70);
    color: var(--grey-15);
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    padding: 14px 16px;
`

export const Button = ({href =  "", children}) => {

    return <LinkButton to={href}>
        {children}
    </LinkButton>
}