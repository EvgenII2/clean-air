import Header from "../Header/Header";
import "./App.css";
import {
  TranslationContext,
  translations,
} from "../../context/TranslationContext";
import React from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import MainMenu from "../MainMenu/MainMenu";

function App() {
  const [lang, setLang] = React.useState("ru");
  const [isCanScroll, setIsCanScroll] = React.useState(true);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  const refHeader = React.useRef();
  const refDesc = React.useRef();
  const refScheme = React.useRef();
  const refAdvanteges = React.useRef();
  const refModels = React.useRef();
  const refParam = React.useRef();
  const refApplications = React.useRef();
  const refContacts = React.useRef();

  React.useEffect(() => {
    document.doctype.nextSibling.lang = lang;
  }, [lang]);

  React.useEffect(() => {
    isCanScroll
      ? (window.document.body.style.overflow = "auto")
      : (window.document.body.style.overflow = "hidden");
  }, [isCanScroll]);

  function closePopup() {
    setIsCanScroll(true);
    setSelectedPhoto(null);
  }

  function handlePhotoClick(photo) {
    setIsCanScroll(false);
    setSelectedPhoto(photo);
  }

  function toHeader() {
    console.log(refHeader);
    refHeader.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  function toDesc() {
    refDesc.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  function toScheme() {
    refScheme.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  function toAdvanteges() {
    refAdvanteges.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
  function toModels() {
    refModels.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  function toParam() {
    refParam.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  function toApplications() {
    refApplications.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  function toContacts() {
    refContacts.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <MainMenu
          toHeader={toHeader}
          toDesc={toDesc}
          toScheme={toScheme}
          toAdvanteges={toAdvanteges}
          toModels={toModels}
          toParam={toParam}
          toApplications={toApplications}
          toContacts={toContacts}
        />
        <Header ref={refHeader} onLangSelect={setLang} />
        <Main
          refDesc={refDesc}
          refScheme={refScheme}
          refAdvanteges={refAdvanteges}
          refModels={refModels}
          refParam={refParam}
          refApplications={refApplications}
          refContacts={refContacts}
          toHeader={toHeader}
          lang={lang}
          onPhotoClick={handlePhotoClick}
        />
        <Footer />
        <ImagePopup photo={selectedPhoto} onClose={closePopup} />
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
