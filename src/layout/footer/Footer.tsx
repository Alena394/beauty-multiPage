import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icons/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-around"} align={"start"}>
                    <a href={"#"}><Icon iconId={"logo"} viewBox={"0 0 40 40"} width={"40px"} height={"40px"}/></a>

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

                    <a href={"#"}>Мы в Instagram
                        <Icon iconId={"instagram"} width={"38px"} height={"38px"} viewBox={"0 0 38 38"}/>
                    </a>

                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  margin-bottom: 110px;
  
  
  
  a{
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media ${Theme.media.tablet}{
      font-size: 16px;
     
    }
    
  };
  
  
  position: relative;
  z-index: 0;

  &:before {
    content: "";
    width: 100%;
    height: 0.5px;
    position: absolute;
    top: -80px;
    z-index: -1;
    background-color: ${Theme.colors.text};
    opacity: 0.5;
  }

  &:after {
    content: "";
    width: 100%;
    height: 0.5px;
    position: absolute;
    bottom: -80px;
    z-index: -1;
    background-color: ${Theme.colors.text};
    opacity: 0.5;
  }
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`

const StyledTitle = styled.span`
  font-family: Garamond sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 25px;

  @media ${Theme.media.tablet}{
    font-size: 16px;
  }
`

const StyledText = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 15px;

  @media ${Theme.media.tablet}{
    font-size: 14px;
    max-width: 100px;
  }
`