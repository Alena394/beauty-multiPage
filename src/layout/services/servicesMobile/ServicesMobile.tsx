import React from 'react';
import Hair from "../../../assets/images/raster/hair.webp"
import Manicure from "../../../assets/images/raster/manicure.webp";
import Pedicure from "../../../assets/images/raster/pedicure.webp";
import Cosmetology from "../../../assets/images/raster/cosmetology.webp";
import Aesthetic from "../../../assets/images/raster/aesthetic-body.webp";
import Visage from "../../../assets/images/raster/visage.webp";

import HairJpg from "../../../assets/images/raster/hair.jpg";
import ManicureJpg from "../../../assets/images/raster/manicure.jpg";
import PedicureJpg from "../../../assets/images/raster/pedicure.jpg";
import CosmetologyJpg from "../../../assets/images/raster/cosmetology.jpg";
import AestheticJpg from "../../../assets/images/raster/aesthetic-body.jpg";
import VisageJpg from "../../../assets/images/raster/visage.jpg";

import styled from "styled-components";
import {Container} from "../../../components/Container";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../../styles/slider.css";
import {Theme} from "../../../styles/Theme";


type SlidePropsType = {
    img: string
    text: string
    alt:string
}
const Slide = (props:SlidePropsType) => {
    return (
        <StyledSlide>
            <StyledImg src={props.img} alt = {props.alt}/>
            <StyledText>{props.text}</StyledText>
        </StyledSlide>)

}
const items = [
    <Slide img={Hair || HairJpg} text={"Парикмахерские услуги"} alt={"Парикмахерские услуги"}/>,
    <Slide img={Manicure || ManicureJpg} text={"Маникюр"} alt={"Маникюр"}/>,
    <Slide img={Pedicure || PedicureJpg} text={"Педикюр"} alt={"Педикюр"}/>,
    <Slide img={Cosmetology || CosmetologyJpg} text={"Косметология"} alt={"Косметология"}/>,
    <Slide img={Aesthetic ||AestheticJpg} text={"Эстетист по телу"} alt={"Эстетист по телу"}/>,
    <Slide img={Visage || VisageJpg} text={"Визаж"} alt={"Визаж"}/>
];

export const ServicesMobile = () => (
    <Container>
        <StyledSlider>
            <AliceCarousel
                mouseTracking
                items={items}
            />
        </StyledSlider>
    </Container>
);


const StyledSlider = styled.div`
  display: none;
  
  @media ${Theme.media.tablet} {
    display: block;
    margin-bottom: 130px;
   }
 `

const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
       
`

const StyledImg = styled.img`
  width: 500px;
  height: 400px;
  object-fit: cover;

 
`


const StyledText = styled.h3`
  margin-top: 30px;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 36px */
  text-align: center;
`

