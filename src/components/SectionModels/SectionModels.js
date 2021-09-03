import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import ModelGrid from "../ModelGrid/ModelGrid";
import "./SectionModels.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const SectionModels = React.forwardRef(({}, ref) => {
  const translation = React.useContext(TranslationContext);

  return (
    <section ref={ref} className="section-models">
      <SectionTitle title={translation.sectionModelsTitle} />
      <ul className="section-models__tables">
        {translation.sectionModelsValues.map((item, index) => (
          <ModelGrid key={index} model={item} />
        ))}
      </ul>
    </section>
  );
});
export default SectionModels;
