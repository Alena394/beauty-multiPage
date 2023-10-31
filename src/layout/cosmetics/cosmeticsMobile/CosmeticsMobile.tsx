import React from 'react';
import {Icon} from "../../../components/icons/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const CosmeticsMobile = () => {
    return (
        <StyledCosmeticsMobile>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Icon iconId={"cosmetics1"} viewBox={"0 0 69 108"} height={"90"} width={"50"}/>
                <Icon iconId={"cosmetics2"} viewBox={"0 0 90 120"} width={"70"} height={"100"}/>
                <Icon iconId={"cosmetics3"} viewBox={"0 0 190 98"} width={"170"} height={"80"}/>
                <Icon iconId={"cosmetics4"} viewBox={"0 0 110 108"} height={"90"} width={"90"}/>
            </FlexWrapper>
        </StyledCosmeticsMobile>
    );
};


const StyledCosmeticsMobile = styled.section`
display: none;
  
  @media ${Theme.media.tablet}{
    display: block;
    
  }
`
