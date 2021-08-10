import Header from '../Header/Header';
import './App.css';
import { TranslationContext, translations } from '../../context/TranslationContext';
import React from 'react';
import Main from '../Main/Main';

function App() {
  const [lang, setLang] = React.useState('ru');

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <Header onLangSelect={setLang} />
        <Main lang={lang} />
      </TranslationContext.Provider>
    </div >
  );
}

export default App;
