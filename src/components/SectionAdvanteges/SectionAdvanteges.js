import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import Advantage from "../Advantage/Advantage";
import SectionIndividuality from "../SectionIndividuality/SectionIndividuality";
import SectionTitle from "../SectionTitle/SectionTitle";
import './SectionAdvanteges.css'

function SectionAdvanteges(props) {

    const translation = React.useContext(TranslationContext);

    return (
        <section className="section-advantages">
            <SectionTitle link={props.link} title={translation.sectionAdvantagesTitle} />
            <ul className="section-advantages__grid">
                {translation.sectionAdvantages.map((item, index) =>
                    (<Advantage key={index} adv={item} />))}
            </ul>
            <SectionIndividuality />
        </section>
    )
}

export default SectionAdvanteges;