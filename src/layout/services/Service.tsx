import React from 'react';
import styled from "styled-components";
import {ImgWrapperPseudo} from "../../components/ImgWrapperPseudo";


type ServicePropsType = {
    serviceImage: string
    serviceAlt: string
    title: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>

            <ImgWrapperPseudo width={"400px"} height={"300px"}>
                <img src={props.serviceImage} alt={props.serviceAlt}/>
            </ImgWrapperPseudo>

            <StyledTitle>{props.title}</StyledTitle>

        </StyledService>
    );
};


const StyledService = styled.div`
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }

  margin-bottom: 80px;
`


const StyledTitle = styled.h3`
  margin-top: 30px;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 36px */


`
