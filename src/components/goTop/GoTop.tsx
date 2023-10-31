import React, {useEffect, useState} from 'react';
import {Icon} from "../icons/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import {Theme} from "../../styles/Theme";


export const GoTop = () => {

    const [showBtn, setShowBtn] =useState(false)

    useEffect(()=>{window.addEventListener("scroll", () =>{
        if(window.scrollY>200){
            setShowBtn(true)
        }else {
            setShowBtn(false)
        }
    })})


    const onClickHandler = () =>{
        scroll.scrollToTop()
    }


    return (
        <>
            { showBtn && (<StyledGoTopBtn onClick={onClickHandler} aria-hidden={true}>
            <Icon iconId={"go-top"} viewBox={"0 0 32 32"} stroke={"white"} width={"20px"} height={"20px"}/>
        </StyledGoTopBtn>)}
        </>

    );
};



const StyledGoTopBtn = styled.button`
  position:fixed;
  bottom: 30px;
  right: 30px;
  background-color: #fff;
  border-radius: 5px;
  padding: 3px;
  opacity: 0.6;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.2);
    transition: 0.7s;
  }
  
  
  @media ${Theme.media.tablet}{
    display: none;
  }
`
