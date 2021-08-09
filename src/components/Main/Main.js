import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import SectionAdvanteges from "../SectionAdvanteges/SectionAdvanteges";
import SectionDescription from "../SectionDescription/SectionDescription";
import SectionScheme from "../SectionScheme/SectionScheme";
import './Main.css';

function Main(props) {
    return (
        <>
            <MainMenu />
            <SectionDescription />
            <SectionScheme />
            <SectionAdvanteges />
        </>
    )
}

export default Main;