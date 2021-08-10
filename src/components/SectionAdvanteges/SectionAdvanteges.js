import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import Advantage from "../Advantage/Advantage";
import './SectionAdvanteges.css'

function SectionAdvanteges(props) {

    const translation = React.useContext(TranslationContext);

    return (
        <div className="section-advantages">
            <h2 id={props.link} className="section-advantages__title">
                {translation.sectionAdvantagesTitle}
            </h2>
            <ul className="section-advantages__grid">
                {translation.sectionAdvantages.map((item, index) =>
                    (<Advantage key={index} adv={item} />))}
            </ul>
        </div>
    )
}

export default SectionAdvanteges;