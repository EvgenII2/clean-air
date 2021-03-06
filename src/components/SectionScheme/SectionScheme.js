import React from "react";
import schemeRus from "../../images/air-cleaner-scheme-rus.png"
import schemeEng from "../../images/air-cleaner-scheme-eng.png"
import './SectionScheme.css'
import { TranslationContext } from "../../context/TranslationContext";
import SectionTitle from "../SectionTitle/SectionTitle";

function SectionScheme(props) {

    const [scheme, setScheme] = React.useState(schemeEng);

    const translation = React.useContext(TranslationContext);

    React.useEffect(() => {
        setScheme((props.lang === 'en') ? schemeEng : schemeRus);
    }, [props.lang])

    function handleClick(e) {
        const photo = e.currentTarget;
        props.onPhotoClick({ link: photo.src, name: photo.alt });
    }

    return (
        <section className="section-scheme">
            <SectionTitle link={props.link} title={translation.sectionSchemeTitle} />
            <img className="section-scheme__image" src={scheme} alt={translation.sectionSchemeTitle} onClick={handleClick} />
        </section>
    )
}

export default SectionScheme;