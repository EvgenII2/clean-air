import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import SectionAdvanteges from "../SectionAdvanteges/SectionAdvanteges";
import SectionDescription from "../SectionDescription/SectionDescription";
import SectionScheme from "../SectionScheme/SectionScheme";
import './Main.css';

function Main(props) {

    const [links, setLinks] =
        React.useState(['desc', 'scheme', 'advanteges']);

    return (
        <main className="main">
            <MainMenu links={links} />
            <SectionDescription link={links[0]} />
            <SectionScheme link={links[1]} lang={props.lang} />
            <SectionAdvanteges link={links[2]} />
        </main>
    )
}

export default Main;