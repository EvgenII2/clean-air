import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import "./SectionDescription.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const SectionDescription = React.forwardRef(({}, ref) => {
  const translation = React.useContext(TranslationContext);
  function getDescription() {
    return translation.sectionDescText.map((paragraph, index) => (
      <li className="section-desc__paragraph" key={index}>
        {paragraph}
      </li>
    ));
  }

  return (
    <section ref={ref} className="section-desc">
      <p className="section-desc__description">
        {translation.sectionDescSubTitle}
      </p>
      <SectionTitle title={translation.sectionDescTitle} />
      <ul className="section-desc__text">{getDescription()}</ul>
    </section>
  );
});

export default SectionDescription;
