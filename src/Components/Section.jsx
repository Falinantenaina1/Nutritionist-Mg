import styled from "styled-components"
import { ContainerWrapper } from "./ContainerWrapper"

const H2 = styled.h2`
    font-size: 28px;
    line-height: 150%;
    font-weight: 700;
    color: var(--grey-15);
    text-align: center;

    @media screen and (min-width: 1440px){
        font-size: 38px;
    }
    @media screen and (min-width: 1920px){
        font-size: 48px;
    }
`

const P = styled.p`
    text-align: center;
`

export const Section = ({title, description, children}) => {

    return <section>
        <ContainerWrapper>
            <H2>{title}</H2>
            <P>{description}</P>
            {children}
        </ContainerWrapper>
    </section>
}