import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import './SectionDescription.css'
import SectionTitle from "../SectionTitle/SectionTitle";

function SectionDescription(props) {

    const translation = React.useContext(TranslationContext);

    function getDescription() {
        return (
            translation.sectionDescText.map((paragraph, index) =>
                <li className="section-desc__paragraph" key={index}>{paragraph}</li>)
        )
    }

    return (
        <section className="section-desc">
            <p id={props.link} className="section-desc__description">
                {translation.sectionDescSubTitle}
            </p>
            <SectionTitle link={props.link} title={translation.sectionDescTitle} />
            <ul className="section-desc__text">
                {getDescription()}
            </ul>
        </section>
    );
}

export default SectionDescription;