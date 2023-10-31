import React from 'react';
import styled from "styled-components";
import {Master} from "./Master";
import Master1 from "../../assets/images/raster/master1.webp";
import Master2 from "../../assets/images/raster/master2.webp";
import Master3 from "../../assets/images/raster/master3.webp";
import Master4 from "../../assets/images/raster/master4.webp";
import Master5 from "../../assets/images/raster/master5.webp";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";


export const Masters = () => {
    return (
        <StyledMasterSections>
            <Container>
            <SectionTitle>Наши мастера</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-around"} align={"center"}>
            <Master MasterImage={Master1} MasterAlt={"Master"} name={"Елена Васильевна"} post={"Визажист"}/>
            <Master MasterImage={Master2} MasterAlt={"Master"} name={"Елена Васильевна"} post={"Визажист"}/>
            <Master MasterImage={Master3} MasterAlt={"Master"} name={"Елена Васильевна"} post={"Визажист"}/>
            <Master MasterImage={Master4} MasterAlt={"Master"} name={"Елена Васильевна"} post={"Визажист"}/>
            <Master MasterImage={Master5} MasterAlt={"Master"} name={"Елена Васильевна"} post={"Визажист"}/>
            <Master MasterImage={Master1} MasterAlt={"Master"} name={"Елена Васильевна"} post={"Визажист"}/>
            </FlexWrapper>
            </Container>
        </StyledMasterSections>

    );
};


const StyledMasterSections = styled.section`
    margin-bottom: 120px;
  
  @media ${Theme.media.tablet}{
    display: none;
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