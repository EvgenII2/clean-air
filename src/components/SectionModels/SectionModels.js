import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import ModelGrid from "../ModelGrid/ModelGrid";
import './SectionModels.css'
import SectionTitle from "../SectionTitle/SectionTitle";

function SectionModels(props) {

    const translation = React.useContext(TranslationContext);

    return (
        <section className="section-models">
            <SectionTitle link={props.link} title={translation.sectionModelsTitle} />
            <ul className="section-models__tables">
                {translation.sectionModels.map((item, index) =>
                    (<ModelGrid key={index} model={item} />))}
            </ul>
        </section>
    )
}

export default SectionModels;