import {PriceList} from "./PriceList";
import React from "react";
import styled from "styled-components";

type PriceBlockPropsType = {
    img: string
    alt: string

}
export const PriceBlock = (props: PriceBlockPropsType) => {
    return (
        <StyledPriceBlock>

                <img src={props.img} alt={props.alt}/>

                <div>
                    <PriceList name={"Женская укладка"} add={"+ обработка кончинков волос"}
                               value={"1 000 ₽"}/>
                    <PriceList name={"Женская укладка"} add={"+ обработка кончинков волос"}
                               value={"1 000 ₽"}/>
                    <PriceList name={"Женская укладка"} add={"+ обработка кончинков волос"}
                               value={"1 000 ₽"}/>
                    <PriceList name={"Женская укладка"} add={"+ обработка кончинков волос"}
                               value={"1 000 ₽"}/>
                </div>


        </StyledPriceBlock>

    );
}

const StyledPriceBlock = styled.div`
  display: flex;
  margin-bottom: 115px;
  
  img {
    object-fit: cover;
    width: 635px;
    height: 525px;
  }
  
  &:nth-child(even){
    flex-direction: row;
    justify-content: space-between;
  };

  &:nth-child(odd){
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`