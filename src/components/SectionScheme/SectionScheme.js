import React from "react";
import schemeRus from "../../images/air-cleaner-scheme-rus.png";
import schemeEng from "../../images/air-cleaner-scheme-eng.png";
import "./SectionScheme.css";
import { TranslationContext } from "../../context/TranslationContext";
import SectionTitle from "../SectionTitle/SectionTitle";

const SectionScheme = React.forwardRef(({ lang, onPhotoClick }, ref) => {
  const [scheme, setScheme] = React.useState(schemeEng);

  const translation = React.useContext(TranslationContext);

  React.useEffect(() => {
    setScheme(lang === "en" ? schemeEng : schemeRus);
  }, [lang]);

  function handleClick(e) {
    const photo = e.currentTarget;
    onPhotoClick({ link: photo.src, name: photo.alt });
  }

  return (
    <section ref={ref} className="section-scheme">
      <SectionTitle title={translation.sectionSchemeTitle} />
      <img
        className="section-scheme__image"
        src={scheme}
        alt={translation.sectionSchemeTitle}
        onClick={handleClick}
      />
    </section>
  );
});

export default SectionScheme;
