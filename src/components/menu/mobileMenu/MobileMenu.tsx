import React, {useState} from 'react';
import {Icon} from "../../icons/Icon";
import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";

export const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const onBurgerBtnClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <StyledMobileMenu>


            <Icon iconId={"logo"} width={"70px"} height={"40px"} viewBox={"0 0 40 40"}/>


            <MobileMenuPopUp isOpen={showMenu}>
                <CloseBtn onClick={onBurgerBtnClick}>
                    <Icon iconId={"close"} viewBox={"0 0 30 30"}/>
                </CloseBtn>

                <ul>
                    <li>
                        <a href={""}>Мастера</a>
                    </li>
                    <li>
                        <a href={""}>Косметика</a>
                    </li>
                    <li>
                        <a href="#">Акции</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </MobileMenuPopUp>

            <BurgerButton isOpen={showMenu} onClick={onBurgerBtnClick}>
                <Icon iconId={"burger"} width={"60px"} height={"60px"} viewBox={"0 0 50 21"}/>
            </BurgerButton>
        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
  display: none;

  @media ${Theme.media.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;


  }
`
const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 7777;
  background-color: rgba(17, 17, 17, 0.99);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  a {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    color: ${Theme.colors.hover};
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
`

const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;


`
