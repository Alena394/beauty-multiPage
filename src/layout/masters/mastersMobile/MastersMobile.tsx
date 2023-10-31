import React from 'react';
import {Container} from "../../../components/Container";
import styled from "styled-components";

import Master1 from "../../../assets/images/raster/master1.webp";
import Master2 from "../../../assets/images/raster/master2.webp";
import Master3 from "../../../assets/images/raster/master3.webp";
import Master4 from "../../../assets/images/raster/master4.webp";
import Master5 from "../../../assets/images/raster/master5.webp";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Theme} from "../../../styles/Theme";


type SlidePropsType = {
    img: string
    alt: string
    name: string
    post: string
}
const Slide = (props: SlidePropsType) => {
    return (
            <StyledSlide>
                <StyledImg src={props.img} alt={props.alt}/>
                <MasterName>{props.name}</MasterName>
                <MasterPost>{props.post}</MasterPost>
            </StyledSlide>
    )
}

const items = [
    <Slide img={Master1} alt={"Елена Васильевна Визажист"} name={"Елена Васильевна"} post={"Визажист"}/>,
    <Slide img={Master2} alt={"Елена Васильевна Визажист"} name={"Елена Васильевна"} post={"Визажист"}/>,
    <Slide img={Master3} alt={"Елена Васильевна Визажист"} name={"Елена Васильевна"} post={"Визажист"}/>,
    <Slide img={Master4} alt={"Елена Васильевна Визажист"} name={"Елена Васильевна"} post={"Визажист"}/>,
    <Slide img={Master5} alt={"Елена Васильевна Визажист"} name={"Елена Васильевна"} post={"Визажист"}/>,
    <Slide img={Master1} alt={"Елена Васильевна Визажист"} name={"Елена Васильевна"} post={"Визажист"}/>
]

export const MastersMobile = () => {
    return (
        <Container>
            <SectionTitle>Наши мастера</SectionTitle>
            <StyledSlider>
                <AliceCarousel
                    mouseTracking
                    items={items}
                />
            </StyledSlider>
        </Container>
    );
};


const StyledSlider = styled.div`
  display: none;

  @media ${Theme.media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-family: Garamond sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  margin-bottom: 100px;
`

const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const StyledImg = styled.img`
  object-fit: cover;
  width: 400px;
  height: 480px;
`

const MasterName = styled.p`
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`

const MasterPost = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
`

