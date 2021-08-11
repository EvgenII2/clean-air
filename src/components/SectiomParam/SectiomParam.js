import React from 'react';
import { TranslationContext } from '../../context/TranslationContext';
import './SectiomParam.css';
import SectionTitle from "../SectionTitle/SectionTitle";

function SectiomParam(props) {

    const translation = React.useContext(TranslationContext);

    return (
        <section className="section-params">
            <SectionTitle link={props.link} title={translation.sectionParamTitle} >
                <span className="section-params__subtitle">{translation.sectionParamSubTitle}</span>
            </SectionTitle>

            <ul className="section-params__params">
                {translation.sectionParamSpecifications.map((item, index) => (
                    <li className="section-params__param" key={index}>
                        <h3 className='section-params__param-title'>{item.title}</h3>
                        <p className='section-params__param-value'>{item.value}</p>
                    </li>
                ))
                }
            </ul>
        </section>
    )
}

export default SectiomParam;