import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import Advantage from "../Advantage/Advantage";
import SectionIndividuality from "../SectionIndividuality/SectionIndividuality";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./SectionAdvanteges.css";

const SectionAdvanteges = React.forwardRef(({}, ref) => {
  const translation = React.useContext(TranslationContext);

  return (
    <section ref={ref} className="section-advantages">
      <SectionTitle title={translation.sectionAdvantagesTitle} />
      <ul className="section-advantages__grid">
        {translation.sectionAdvantagesValues.map((item, index) => (
          <Advantage key={index} adv={item} />
        ))}
      </ul>
      <SectionIndividuality />
    </section>
  );
});

export default SectionAdvanteges;
