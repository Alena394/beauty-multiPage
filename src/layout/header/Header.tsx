import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/menu/mobileMenu/MobileMenu";

type HeaderPropsType = {
    openRightMenu: boolean
    onBurgerBtnClick: () => void
}
export const Header = (props: HeaderPropsType) => {

    const [showFillHeader, setShowFillHeader] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowFillHeader(true)
            } else {
                setShowFillHeader(false)
            }
        })
    }, []);

    return (

        <StyledHeader showFillHeader={showFillHeader}>
            <Container>
                <Menu {...props}/>
                <MobileMenu/>
            </Container>
        </StyledHeader>

    );
}


const StyledHeader = styled.header<{ showFillHeader: boolean }>`
  height: 80px;
  border-bottom: 1px solid rgb(225, 225, 225, 0.5);
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: ${(props) => props.showFillHeader && `${Theme.colors.bgc}`}
}

`









