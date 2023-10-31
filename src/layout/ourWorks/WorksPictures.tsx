import React from 'react';
import styled from "styled-components";

type WorksPicturesPropsType = {
    WorksImage: string
    WorksAlt: string

}
export const WorksPictures = (props: WorksPicturesPropsType) => {
    return (

        <Styled>
            <img src={props.WorksImage} alt={props.WorksAlt}/>
        </Styled>



    );
};

const Styled = styled.div`
    img{
      width: 420px;
      height: 420px;
      object-fit: cover;

    }
`

