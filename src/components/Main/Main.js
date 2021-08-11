import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import SectiomParam from "../SectiomParam/SectiomParam";
import SectionAdvanteges from "../SectionAdvanteges/SectionAdvanteges";
import SectionDescription from "../SectionDescription/SectionDescription";
import SectionModels from "../SectionModels/SectionModels";
import SectionScheme from "../SectionScheme/SectionScheme";
import './Main.css';

function Main(props) {

    const [links, setLinks] =
        React.useState(['desc', 'scheme', 'advanteges', 'models', 'param']);

    return (
        <main className="main">
            <MainMenu links={links} />
            <SectionDescription link={links[0]} />
            <SectionScheme link={links[1]} lang={props.lang} />
            <SectionAdvanteges link={links[2]} />
            <SectionModels link={links[3]} />
            <SectiomParam link={links[4]} />
        </main>
    )
}

export default Main;