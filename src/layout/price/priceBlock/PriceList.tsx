import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";

type PriceListPropsType = {
    name:string
    add?:string
    value:string
}

export const PriceList = (props:PriceListPropsType) => {
    return (
        <StyledPriceList>
            <FlexWrapper justify={"space-between"} gap={"300px"}>
            <ServiceName>{props.name}</ServiceName>
            <PriceValue>{props.value}</PriceValue>
            </FlexWrapper>
            <Addition>{props.add}</Addition>
        </StyledPriceList>
    );
};


const StyledPriceList = styled.div`
  position: relative;
  z-index: 0;
    &::after{
      content: "";
      width: 100%;
      height: 0.5px;
      position:absolute;
      bottom: -30px;
      z-index:-1;
      background-color:${Theme.colors.text};
      opacity: 0.5;
    }
    }
   
`

const ServiceName = styled.p`
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`

const Addition = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 60px;
`

const PriceValue = styled.span`
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
    
`