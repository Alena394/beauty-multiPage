import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icons/Icon";
import {Container} from "../../components/Container";
import Bgc from "../../assets/images/raster/bcg.webp"
import {Link} from "react-scroll";
import {Theme} from "../../styles/Theme";

export const Main = () => {
    return (
        <StyledMainPage>
            <Container>

                <div>
            <StyledTitle>Салон красоты «Delote-Beauty» на Крестовском</StyledTitle>

                <StyledLink aria-hidden={true} to={"about"} smooth={true} offset={-90}>
                    <Icon aria={true} iconId={"mouse-down"} width={"20px"} height={"30px"}/>
                    <StyledSpan>Прокрутите вниз</StyledSpan>
                </StyledLink>
                </div>

            </Container>

</StyledMainPage>

)
    ;
};

const StyledMainPage = styled.section`

  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${Bgc});
  background-size: cover;
  background-position: center;

  min-height: 100vh;
  min-width: 100%;
  position: relative;
  z-index: 0;

  div {

    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

  }
`


const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  font-family: Garamond sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${Theme.media.tablet}{
    font-size: 60px;
    max-width: 500px;
  }


`
const StyledSpan = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-left:5px;
`

const StyledLink = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
`




