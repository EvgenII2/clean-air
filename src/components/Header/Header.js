import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import LangMenu from "../LangMenu/LangMenu";
import './Header.css';

function Header(props) {

    const translation = React.useContext(TranslationContext);

    return (
        <header className="header">
            <LangMenu onLangSelect={props.onLangSelect} />
            <div className="header__description">
                <h1 className="header__title">{translation.headerTitle}</h1>
                <p className="header__subtitle">{translation.headerSubTitle}</p>
            </div>
        </header>
    );
}

export default Header;