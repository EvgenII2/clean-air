import './SectionIndividuality.css';
import React from 'react';
import { TranslationContext } from '../../context/TranslationContext';
import SectionTitle from "../SectionTitle/SectionTitle";

function SectionIndividuality(props) {

    const translation = React.useContext(TranslationContext);

    return (
        <div className="section-individuality">
            <SectionTitle title={translation.sectionIndividulityTitle} />
            <p className="section-individuality__text">{translation.sectionIndividulityText}</p>
        </div>
    )
}

export default SectionIndividuality;