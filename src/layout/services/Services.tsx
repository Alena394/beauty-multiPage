import React from 'react';
import styled from "styled-components";
import {Service} from "./Service";
import Hair from "../../assets/images/raster/hair.webp";
import Manicure from "../../assets/images/raster/manicure.webp";
import Pedicure from "../../assets/images/raster/pedicure.webp";
import Cosmetology from "../../assets/images/raster/cosmetology.webp";
import Aesthetic from "../../assets/images/raster/aesthetic-body.webp";
import Visage from "../../assets/images/raster/visage.webp";

import HairJpg from "../../assets/images/raster/hair.jpg";
import ManicureJpg from "../../assets/images/raster/manicure.jpg";
import PedicureJpg from "../../assets/images/raster/pedicure.jpg";
import CosmetologyJpg from "../../assets/images/raster/cosmetology.jpg";
import AestheticJpg from "../../assets/images/raster/aesthetic-body.jpg";
import VisageJpg from "../../assets/images/raster/visage.jpg";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";


export const Services = () => {
    return (
        <StyledServices>
            <Container>
            <FlexWrapper wrap={"wrap"} justify={"space-around"} align={"center"} gap={"45px"}>
            <Service serviceImage={Hair || HairJpg } serviceAlt={"hair"} title={"Парикмахерские услуги"}/>
            <Service serviceImage={Manicure || ManicureJpg } serviceAlt={"manicure"} title={"Маникюр"}/>
            <Service serviceImage={Pedicure || PedicureJpg} serviceAlt={"pedicure"} title={"Педикюр"}/>
            <Service serviceImage={Cosmetology || CosmetologyJpg} serviceAlt={"cosmetology"} title={"Косметология"}/>
            <Service serviceImage={Aesthetic ||AestheticJpg } serviceAlt={"aesthetic-body"} title={"Эстетист по телу"}/>
            <Service serviceImage={Visage || VisageJpg} serviceAlt={"visage"} title={"Визаж"}/>
            </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    margin-bottom: 120px;
  
  @media ${Theme.media.tablet}{
    display: none;
  }
  
`

