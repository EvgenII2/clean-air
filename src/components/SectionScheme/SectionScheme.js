import React from "react";
import schemeRus from "../../images/air-cleaner-scheme-rus.png"
import schemeEng from "../../images/air-cleaner-scheme-eng.png"
import './SectionScheme.css'
import { TranslationContext } from "../../context/TranslationContext";

function SectionScheme(props) {

    const [scheme, setScheme] = React.useState(schemeEng);

    const translation = React.useContext(TranslationContext);

    React.useEffect(() => {
        setScheme((props.lang === 'en') ? schemeEng : schemeRus);
    }, [props.lang])

    return (
        <div className="section-scheme">
            <h2 id={props.link} className="section-scheme__title">
                {translation.sectionSchemeTitle}
            </h2>
            <img className="section-scheme__image" src={scheme} />
        </div>
    )
}

export default SectionScheme;