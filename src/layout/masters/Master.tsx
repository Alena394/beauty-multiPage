import React from 'react';
import styled from "styled-components";
import {ImgWrapperPseudo} from "../../components/ImgWrapperPseudo";

type MasterPropsType = {
    MasterImage: string
    MasterAlt: string
    name: string
    post: string
}
export const Master = (props: MasterPropsType) => {
    return (
        <StyledMaster>
            <ImgWrapperPseudo height={"480px"} width={"400px"}>
            <img src={props.MasterImage} alt={props.MasterAlt}/>
            </ImgWrapperPseudo>
            <MasterName>{props.name}</MasterName>
            <MasterPost>{props.post}</MasterPost>
        </StyledMaster>
    );
};

const StyledMaster = styled.div`
  img {
    object-fit: cover;
    width: 400px;
    height: 480px;
  }
  
  margin-bottom: 60px;
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