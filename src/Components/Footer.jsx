import styled from "styled-components"
import { ContainerWrapper } from "./ContainerWrapper"
import { ContactList } from "../Data/ContactList"

const StyledFooter = styled.footer`
    background: var(--dark-green-15);
    color: var(--white);
    padding: 30px 0;
`

const ContactContainer = styled.div`
    background: var(--dark-green-20);
    padding: 20px;
    border: 1px solid var(--dark-green-25);
    border-radius: 8px;
`

const StyledContact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    margin-bottom: 16px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid var(--dark-green-25);
    img {
        width: 20px;
        height: 20px;
    }
`

export const Footer = () => {

    return <StyledFooter>
        <ContainerWrapper>
            <ContactContainer>
                {ContactList.map(item => <Contact key={item.text} src={item.src} text={item.text} />)}
            </ContactContainer>
        </ContainerWrapper>
    </StyledFooter>
}

const Contact = ({src, text}) => {
    
    return <StyledContact>
        <img src={src}/>
        <p>{text}</p>
    </StyledContact>
}