import styled from "styled-components";
import flower from "../assets/flower.svg";

const Div = styled.div`
  background-color: var(--green-95);
  border: 1px solid var(--green-85);
  border-radius: 10px;
  padding: 30px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: var(--green-70);
    margin-right: 10px;
    border-radius: 6px;
  }

  img {
    width: 24px;
    height: 24px;
    font-weight: 600;
  }

  h3 {
    font-size: 18px;
    line-height: 150%;
  }
  
  @media screen and (min-width: 1440px){
    div {
        width: 54px;
        height: 54px;
    }
    img {
        width: 30px;
        height: 30px;
    }
    h3 {
        font-size: 20px;
    }
  }
  @media screen and (min-width: 1920px){
    div {
        width: 68px;
        height: 68px;
    }
    img {
        width: 40px;
        height: 40px;
    }
    h3 {
        font-size: 24px;
    }
  }
`

const Body = styled.p`
    margin-top: 16px;
    @media screen and (min-width: 1440px) {
        margin-top: 20px;
    }
    @media screen and (min-width: 1920px) {
        margin-top: 24px;
    }
`

export const InfoPanel = () => {
  return (
    <Div>
      <Header>
        <div>
          <img src={flower} alt="flower icon" />
        </div>
        <h3>Personalized Nutrition Plans</h3>
      </Header>
      <Body>
        Receive a tailored nutrition plan designed specifically for your body
        and goals. Our certified nutritionists will consider your unique needs,
        dietary preferences, and health conditions to create a plan that suits
        you best.
      </Body>
    </Div>
  );
};
