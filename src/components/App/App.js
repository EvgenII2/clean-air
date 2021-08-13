import Header from '../Header/Header';
import './App.css';
import { TranslationContext, translations } from '../../context/TranslationContext';
import React, { useEffect } from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';

function App() {

  const [lang, setLang] = React.useState('ru');
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(true);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  React.useEffect(() => {
    document.doctype.nextSibling.lang = lang;
  }, [lang]);

  function closePopup() {
    setSelectedPhoto(null);
  }

  function handlePhotoClick(photo) {
    setIsImagePopupOpen(true);
    setSelectedPhoto(photo);
  }

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <Header onLangSelect={setLang} />
        <Main lang={lang} onPhotoClick={handlePhotoClick} />
        <Footer />
        <ImagePopup isOpen={isImagePopupOpen} photo={selectedPhoto} onClose={closePopup} />
      </TranslationContext.Provider>
    </div >
  );
}

export default App;
