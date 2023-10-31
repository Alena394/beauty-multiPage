import {Container} from "../../components/Container";
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Copyright = () =>{
    return(
        <Container>
        <StyledParagraph>Copyright © 2017 - 2022</StyledParagraph>
        </Container>
    );
}

const StyledParagraph = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.5;

  @media ${Theme.media.tablet} {
    font-size: 14px;
  }
`