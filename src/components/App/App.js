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

function App() {
  const [lang, setLang] = React.useState("ru");
  const [isCanScroll, setIsCanScroll] = React.useState(true);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  const refHeader = React.useRef();

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
      behavior: "smooth",
    });
  }

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <div></div>
        <Header ref={refHeader} onLangSelect={setLang} />
        <Main
          toHeader={toHeader}
          onScroll={setIsCanScroll}
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
