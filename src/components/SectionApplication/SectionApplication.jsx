import "./SectionApplication.css";
import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import SectionTitle from "../SectionTitle/SectionTitle";
import ApplicationItem from "../ApplicationItem/ApplicationItem";

const SectionApplication = React.forwardRef(({}, ref) => {
  const translation = React.useContext(TranslationContext);

  return (
    <section ref={ref} className="section-application">
      <SectionTitle title={translation.sectionApplicationTitle} />
      <ul className="section-application__grid">
        {translation.sectionApplicationValues.map((item, index) => (
          <ApplicationItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
});

export default SectionApplication;
