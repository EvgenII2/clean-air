import Header from '../Header/Header';
import './App.css';
import { TranslationContext, translations } from '../../context/TranslationContext';
import React from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';

function App() {
  const [lang, setLang] = React.useState('ru');
  const [isScroll, setIsScroll] = React.useState(true);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  React.useEffect(() => {
    document.doctype.nextSibling.lang = lang;

  }, [lang]);

  React.useEffect(() => {
    isScroll ?
      window.document.body.style.overflow = 'auto' :
      window.document.body.style.overflow = 'hidden';
  }, [isScroll]);

  function closePopup() {
    setIsScroll(true);
    setSelectedPhoto(null);
  }

  function handlePhotoClick(photo) {
    setIsScroll(false);
    setSelectedPhoto(photo);
  }

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <Header onLangSelect={setLang} />
        <Main onScroll={setIsScroll} lang={lang} onPhotoClick={handlePhotoClick} />
        <Footer />
        <ImagePopup photo={selectedPhoto} onClose={closePopup} />
      </TranslationContext.Provider>
    </div >
  );
}

export default App;
