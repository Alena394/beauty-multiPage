import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Контакты</SectionTitle>
                <div>
                    {/*<a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"*/}
                    {/*   style="color:#eee;font-size:12px;position:absolute;top:0px;">Минск</a>*/}
                    {/*<a href="https://yandex.by/maps/157/minsk/house/Zk4Ycw9kT0wEQFtpfXVwdHtlZQ==/?ll=27.584693%2C53.915762&utm_medium=mapframe&utm_source=maps&z=16.69"*/}
                    {/*   style="color:#eee;font-size:12px;position:absolute;top:14px;">Проспект Независимости, 52 — Яндекс Карты</a>*/}
                    <iframe
                        src="https://yandex.by/map-widget/v1/?ll=27.584693%2C53.915762&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY3MzYxORJL0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0L_RgNCw0YHQv9C10LrRgiDQndC10LfQsNC70LXQttC90LDRgdGG0ZYsIDUyIgoNcq3cQRW9qVdC&z=16.69"
                        width="560" height="400" frameBorder="1"></iframe>
                </div>
                <FlexWrapper justify={"space-around"} align={"start"}>
                    <StyledInfo>
                        <StyledTitle>Контакты</StyledTitle>
                        <StyledText>+7 (812) 123-45-67</StyledText>
                        <StyledText>+7 (812) 123-45-67</StyledText>
                        <StyledText>Новоостровский проспект, дом 36 лит. С</StyledText>
                    </StyledInfo>

                    <StyledInfo>
                        <StyledTitle>Режим работы</StyledTitle>
                        <StyledText>C 10:00 до 21:00 (Пн-Пт)</StyledText>
                        <StyledText>С 11:00 до 20:00 (Сб-Вс)</StyledText>
                    </StyledInfo>

                    <StyledInfo>
                        <StyledTitle>Контакты</StyledTitle>
                        <StyledText>+7 (812) 123-45-67</StyledText>
                        <StyledText>+7 (812) 123-45-67</StyledText>
                        <StyledText>Новоостровский проспект, дом 36 лит. С</StyledText>
                    </StyledInfo>

                    <StyledInfo>
                        <StyledTitle>Режим работы</StyledTitle>
                        <StyledText>C 10:00 до 21:00 (Пн-Пт)</StyledText>
                        <StyledText>С 11:00 до 20:00 (Сб-Вс)</StyledText>
                    </StyledInfo>

                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  margin-bottom: 120px;

  iframe {
    width: 100%;
    height: 580px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin-bottom: 80px;
  }
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`
const StyledTitle = styled.span`
  font-family: Garamond sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 25px;
  
  @media ${Theme.media.tablet}{
    font-size: 16px;
  }
`

const StyledText = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 15px;
  
  @media ${Theme.media.tablet}{
    font-size: 14px;
    max-width: 100px;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-family: Garamond sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  margin-bottom: 80px;
`

// allowFullScreen="true" style="position:relative;
// в div карты было  style="position:relative;overflow:hidden;"