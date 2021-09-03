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

function Main({
  refDesc,
  refScheme,
  refAdvanteges,
  refModels,
  refParam,
  refApplications,
  refContacts,
  lang,
  onPhotoClick,
}) {
  console.log("refDesc", refDesc);

  return (
    <main className="main">
      <SectionDescription ref={refDesc} />
      <SectionScheme ref={refScheme} lang={lang} onPhotoClick={onPhotoClick} />
      <SectionAdvanteges ref={refAdvanteges} />
      <SectionModels ref={refModels} />
      <SectiomParam ref={refParam} />
      <SectionApplication ref={refApplications} />
      <SectionContacts ref={refContacts} />
    </main>
  );
}

export default Main;
