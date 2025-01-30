import styled from "styled-components"

const Wrapper = styled.div`
    padding: 0 18px;

    @media screen and (min-width: 1440px) {
        padding: 0 80px;
    };

     @media screen and (min-width: 1920px) {
        padding: 0 162px;
     }   

`
export const ContainerWrapper = ({children}) => {

    return <Wrapper>
        {children}
    </Wrapper>
}