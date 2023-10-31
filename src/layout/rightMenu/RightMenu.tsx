import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme";
import {Icon} from "../../components/icons/Icon";

type rightMenuPropsType = {
    menuIsOpen:boolean
    onBurgerBtnClick: () => void
}
export const RightMenu = (props:rightMenuPropsType) => {
    return (
        <StyledRightMenu isOpen={props.menuIsOpen} aria-hidden={true} >
            <CloseButton onClick={props.onBurgerBtnClick}>
                <Icon iconId={"close"} viewBox={"0 0 30 30"} width={"32px"} height={"32px"}/>
            </CloseButton>

            <StyledMainText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ipsum, adipiscing amet in egestas sem dui, arcu faucibus scelerisque.
                Nisl est felis id volutpat. Sed dolor fermentum amet lectus nibh quis.
                Tortor donec pellentesque leo ac placerat. Morbi.
            </StyledMainText>

            <StyledInfo>
                <StyledTitle>Контакты</StyledTitle>
                <StyledText>+7 (812) 123-45-67</StyledText>
                <StyledText>+7 (812) 123-45-67</StyledText>
                <StyledText>Новоостровский проспект, дом 36 лит. С</StyledText>
            </StyledInfo>

            <StyledInfo>
                <StyledTitle>Режим работы</StyledTitle>
                <StyledText>C 10:00 до 21:00 (Пн-Пт)</StyledText>
                <StyledText>С 11:00 до 20:00 (Сб-Вс)</StyledText>
            </StyledInfo>

        </StyledRightMenu>


    );
};


const StyledRightMenu = styled.aside<{ isOpen: boolean }>`
  background-color: ${Theme.colors.bgc};
  min-height: 100vh;
  max-width: 475px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transform: translateX(100%);
  transition: 1.6s;
  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateX(0);
  `}
  
  
  @media ${Theme.media.tablet}{
  display: none;
}
`

const CloseButton = styled.button`
  cursor: pointer;
  margin-top: 40px;
  margin-left: 80px;
`
const StyledMainText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin: 110px 80px 80px;
`


const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 80px;
  margin-bottom: 25px;
`

const StyledTitle = styled.span`
  font-family: Garamond sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 25px;
`

const StyledText = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 15px;`

