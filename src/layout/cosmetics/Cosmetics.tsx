import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icons/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {CosmeticsMobile} from "./cosmeticsMobile/CosmeticsMobile";
import {Theme} from "../../styles/Theme";

export const Cosmetics = () => {
    return (
        <StyledCosmetics id={"cosmetics"}>
            <Container>

                <StyledCosmeticsDesktop>
                    <FlexWrapper align={"center"} justify={"space-around"}>
                        <Icon iconId={"cosmetics1"} viewBox={"0 0 69 108"} height={"110"} width={"70"}/>
                        <Icon iconId={"cosmetics2"} viewBox={"0 0 90 120"} width={"90"} height={"120"}/>
                        <Icon iconId={"cosmetics3"} viewBox={"0 0 190 98"} width={"190"} height={"100"}/>
                        <Icon iconId={"cosmetics4"} viewBox={"0 0 110 108"} height={"110"} width={"110"}/>
                    </FlexWrapper>
                </StyledCosmeticsDesktop>

                <CosmeticsMobile/>
            </Container>
        </StyledCosmetics>
    );
};

const StyledCosmetics = styled.section`
  margin-bottom: 120px;

`

const StyledCosmeticsDesktop = styled.div`
  @media ${Theme.media.tablet} {
    display: none;
  }

`

