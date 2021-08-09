import React from "react";
import { TranslationContext } from "../../context/TranslationContext";

function SectionDescription(props) {

    const translation = React.useContext(TranslationContext);

    function getDescription() {
        return (
            translation.sectionDescText.map(paragraph =>
                <li className="section__paragraph">{paragraph}</li>)
        )
    }

    return (
        <>
            <a name="desc" ></a>
            <p className="section__description">{translation.sectionDescSubTitle}
            </p>
            <h2 className="section__title">{translation.sectionDescTitle}</h2>
            <ul className="section__text">
                {getDescription()}
            </ul>
        </>
    );
}

export default SectionDescription;