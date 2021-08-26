import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import SectiomParam from "../SectiomParam/SectiomParam";
import SectionAdvanteges from "../SectionAdvanteges/SectionAdvanteges";
import SectionApplication from "../SectionApplication/SectionApplication";
import SectionDescription from "../SectionDescription/SectionDescription";
import SectionModels from "../SectionModels/SectionModels";
import SectionScheme from "../SectionScheme/SectionScheme";
import SectionContacts from "../SectionContacts/SectionContacts";
import "./Main.css";

function Main({ toHeader, lang, onPhotoClick }) {
  const links = [
    "desc-anchor",
    "scheme-anchor",
    "advanteges-anchor",
    "models-anchor",
    "param-anchor",
    "application-anchor",
    "contacts-anchor",
  ];

  return (
    <main className="main">
      <MainMenu toHeader={toHeader} links={links} />
      <SectionDescription link={links[0]} />
      <SectionScheme link={links[1]} lang={lang} onPhotoClick={onPhotoClick} />
      <SectionAdvanteges link={links[2]} />
      <SectionModels link={links[3]} />
      <SectiomParam link={links[4]} />
      <SectionApplication link={links[5]} />
      <SectionContacts link={links[6]} />
    </main>
  );
}

export default Main;
