import React from 'react';
import styled from "styled-components";
import Image from "../../assets/images/raster/price1.webp"
import {Container} from "../../components/Container";
import {PriceBlock} from "./priceBlock/PriceBlock";


export const Price = () => {
    return (
        <StyledPrice>
            <Container>
                <StyledSectionTitle>Цены на услуги</StyledSectionTitle>
                <PriceBlock img={Image} alt={"PriceImage"}/>
                <PriceBlock img={Image} alt={"PriceImage"}/>
                <PriceBlock img={Image} alt={"PriceImage"}/>
            </Container>
        </StyledPrice>
    );
};


const StyledPrice = styled.section`
  margin-bottom: 120px;
`
const StyledSectionTitle = styled.h2`
  font-family: Garamond sans-serif;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  margin-bottom: 80px`