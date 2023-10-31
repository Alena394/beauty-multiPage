import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {RightMenu} from "./layout/rightMenu/RightMenu";
import {About} from "./layout/about/About";
import {Services} from "./layout/services/Services";
import {Cosmetics} from "./layout/cosmetics/Cosmetics";
import {OurWorks} from "./layout/ourWorks/OurWorks";
import {Masters} from "./layout/masters/Masters";
import {Price} from "./layout/price/Price";
import {Contacts} from "./layout/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {Copyright} from "./layout/copyright/Copyright";
import {useState} from "react";
import {GoTop} from "./components/goTop/GoTop";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ServicesMobile} from "./layout/services/servicesMobile/ServicesMobile";
import {MastersMobile} from "./layout/masters/mastersMobile/MastersMobile";


function App() {

    const [openRightMenu, setOpenRightMenu] = useState(false);
    const onBurgerBtnClick = ()=>{setOpenRightMenu(!openRightMenu)}

    return (

        <div>
            <Header openRightMenu={openRightMenu} onBurgerBtnClick={onBurgerBtnClick} />
            <Main/>
            <RightMenu menuIsOpen={openRightMenu} onBurgerBtnClick={onBurgerBtnClick}/>
            <About/>
            <Services/>
            <ServicesMobile/>
            <Cosmetics/>
            <OurWorks/>
           <Masters/>
            <MastersMobile/>
            <Price/>
            <Contacts/>
            <Footer/>
            <Copyright/>
            <GoTop/>
        </div>

    );
}

export default App;

