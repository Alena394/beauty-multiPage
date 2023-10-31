import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icons/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


export const About = () => {
    return (
        <StyledAbout id={"about"}>
            <Container>
           <FlexWrapper justify={"center"} align={"center"}>
            <Icon aria={true} iconId={"quotation-marks"} width={"80px"} height={"65px"} viewBox={"0 0 80 64"}/>
           </FlexWrapper>
            <Text1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra
                donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada
                sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis.</Text1>
<br/>
               <Text2> Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices
                condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</Text2>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  margin-top:120px;
  margin-bottom: 120px;
  
`

const Text1 = styled.p`
  
  text-align: center;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 35.1px */
  margin: 60px auto 0;
  max-width: 850px;
`

const Text2 = styled.p`
  text-align: center;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 35.1px */
  margin:0 auto;
  max-width: 850px;
    
`