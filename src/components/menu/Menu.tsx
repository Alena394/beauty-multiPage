import styled from "styled-components";
import {Icon} from "../icons/Icon";
import {Theme} from "../../styles/Theme";
import {Link} from "react-scroll";
import {animateScroll as scroll} from "react-scroll";

export const Menu = (props: any) => {
   const {openRightMenu, onBurgerBtnClick} = props

    const onClickHandler = ()=>{
       scroll.scrollToTop()
    }


    return (

        <StyledMenu>
            <ul>

                <li>
                    <a href="#"><Icon iconId={"instagram"}/></a>
                </li>
                <li>
                    <a href="#">Главная</a>
                </li>
                <li>
                    <StyledLink to={"masters"}>Мастера</StyledLink>
                </li>
                <li>
                    <StyledLink to={"cosmetics"} smooth={true} offset={-130}>Косметика</StyledLink>
                </li>
                <li>
                    <StyledLink to={""} onClick={onClickHandler}><Icon iconId={"logo"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/></StyledLink>
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
                <li>
                    <BurgerButton isOpen = {openRightMenu} onClick={onBurgerBtnClick}>
                        <Icon iconId={"burger"} width={"50px"} height={"20px"} viewBox={"0 0 50 21"}/>
                    </BurgerButton>
                </li>

        </ul>



</StyledMenu>
)
    ;
};

const StyledMenu = styled.nav`
  position: relative;
  z-index: 111;
  height: 100%;
  display: flex;
  align-items: center;
  
   

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
       
    
    }
  li:first-child{
    a:hover{
      stroke: red;
      fill: red;
    }
  }
    
    li:first-child,
    li:nth-child(5) {
      a:hover {
        border-bottom: none;
      }
    }
  }

  a {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    
    &:hover {
      color: ${Theme.colors.hover};
      border-bottom: 2px solid ${Theme.colors.hover};
    }
  }
  
  @media ${Theme.media.tablet} {
    display: none;
  }

  
`

const BurgerButton = styled.button<{isOpen:boolean}>`
  cursor: pointer;
`

const StyledLink = styled(Link)`
    cursor: pointer;

`