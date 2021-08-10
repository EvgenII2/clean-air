import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import './SectionDescription.css'

function SectionDescription(props) {

    const translation = React.useContext(TranslationContext);

    function getDescription() {
        return (
            translation.sectionDescText.map((paragraph, index) =>
                <li className="section-desc__paragraph" key={index}>{paragraph}</li>)
        )
    }

    return (
        <div className="section-desc">
            <p id={props.link} className="section-desc__description">
                {translation.sectionDescSubTitle}
            </p>
            <h2 className="section-desc__title">
                {translation.sectionDescTitle}
            </h2>
            <ul className="section-desc__text">
                {getDescription()}
            </ul>
        </div>
    );
}

export default SectionDescription;