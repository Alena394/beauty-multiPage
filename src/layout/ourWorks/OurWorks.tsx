import React, {useState} from 'react';
import styled from "styled-components";
import {WorksPictures} from "./WorksPictures";
import Works1 from "../../assets/images/raster/works1.webp"
import Works2 from "../../assets/images/raster/works2.webp"
import Works3 from "../../assets/images/raster/works3.webp"
import Works4 from "../../assets/images/raster/works4.webp"
import Works5 from "../../assets/images/raster/works5.webp"
import Works6 from "../../assets/images/raster/works6.webp"
import Works7 from "../../assets/images/raster/works7.webp"
import Works8 from "../../assets/images/raster/works8.webp"
import Works9 from "../../assets/images/raster/works9.webp"
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";

import {AnimatePresence, motion} from "framer-motion"


const worksItems = [
    {
        img: Works1,
        alt: "Work1",
        id:1

    },
    {
        img: Works2,
        alt: "Work2",
        type: "Макияж",
        id:2
    },
    {
        img: Works3,
        alt: "Work3",
        type: "Маникюр",
        id:3
    },
    {
        img: Works4,
        alt: "Work4",
        type:"Макияж",
        id:4
    },
    {
        img: Works5,
        alt: "Work5",
        type: "Парикмахерские услуги",
        id:5
    },
    {
        img: Works6,
        alt: "Work6",
        type:"Макияж",
        id:6
    },
    {
        img: Works7,
        alt: "Work7",
        type: "Маникюр",
        id:7
    },
    {
        img: Works8,
        alt: "Work8",
        type: "Парикмахерские услуги",
        id:8
    },
    {
        img: Works9,
        alt: "Work9",
        type:"Парикмахерские услуги",
        id:9
    },

];

type FilterType = "Показать все" | "Парикмахерские услуги" | "Маникюр" | "Педикюр" | "Макияж";
export const OurWorks = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<FilterType>("Показать все");

    let filteredWorks = worksItems;

    if (currentFilterStatus === "Парикмахерские услуги") {
        filteredWorks = worksItems.filter((filterWork) => filterWork.type === "Парикмахерские услуги");
    } else if (currentFilterStatus === "Маникюр") {
        filteredWorks = worksItems.filter((filterWork) => filterWork.type === "Маникюр");
    } else if (currentFilterStatus === "Педикюр") {
        filteredWorks = worksItems.filter((filterWork) => filterWork.type === "Педикюр");
    } else if (currentFilterStatus === "Макияж") {
        filteredWorks = worksItems.filter((filterWork) => filterWork.type === "Макияж");
    }

    const onClickFilter = (nameBtn: FilterType) => {
        setCurrentFilterStatus(nameBtn)
    }

    return (
        <StyledOurWorks>
            <Container>
                <SectionTitle>Наши работы</SectionTitle>

                <StyledTabs>
                    <StyledLink as={"button"} onClick={() => onClickFilter("Показать все")}>Показать все</StyledLink>
                    <StyledLink as={"button"} onClick={() => onClickFilter("Парикмахерские услуги")}>Парикмахерские
                        услуги</StyledLink>
                    <StyledLink as={"button"} onClick={() => onClickFilter("Макияж")}>Макияж</StyledLink>
                    <StyledLink as={"button"} onClick={() => onClickFilter("Маникюр")}>Маникюр</StyledLink>
                    <StyledLink as={"button"} onClick={() => onClickFilter("Педикюр")}>Педикюр</StyledLink>
                </StyledTabs>

                <FlexWrapper wrap={"wrap"} align={"center"} justify={"space-around"} gap={"25px"}>
                    <AnimatePresence>
                        {filteredWorks.map((picture) => {
                            return (
                                <motion.div
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={picture.id}
                                >
                                    <WorksPictures WorksImage={picture.img} WorksAlt={picture.alt} key={picture.id}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </StyledOurWorks>
    );
};


const StyledOurWorks = styled.section`
  margin-bottom: 120px;
`

const SectionTitle = styled.h2`
  font-family: Garamond sans-serif;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  margin-bottom: 100px;
`

const StyledTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 60px;
  
  @media ${Theme.media.tablet}{
    gap:30px;
   
  }

`

const StyledLink = styled.a`
  font-family: Cormorant Garamond sans-serif;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
  position: relative;
  cursor: pointer;
  color: ${Theme.colors.text};
  
  
  &:hover {
    color: ${Theme.colors.hover};

    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: ${Theme.colors.hover};
      position: absolute;
      left: 0;
      bottom: -3px;
    }
  }
  @media ${Theme.media.tablet}{
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    
  }
`

