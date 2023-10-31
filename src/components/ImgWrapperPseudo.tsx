import {Theme} from "../styles/Theme";
import styled from "styled-components";

type ImgWrapperPseudoPropsType = {
    width:string
    height:string

}
export const ImgWrapperPseudo = styled.div<ImgWrapperPseudoPropsType> `
position:relative;
  z-index: 0;
  &::before{
    content:" ";
    width: ${props => props.width};
    height: ${props => props.height};
    border:1px solid ${Theme.colors.hover};
    position:absolute;
    top:-20px;
    right: -20px;
    z-index: -1;
    
    @media ${Theme.media.tablet}{
      display: none;
    }
  }
  
 
`