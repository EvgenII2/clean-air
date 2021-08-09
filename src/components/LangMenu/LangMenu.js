import React from "react";
import LangMenuButton from "../LangMenuButton/LangMenuButton";
import './LangMenu.css'

function LangMenu(props) {

    const [isActiveRu, setIsActiveRu] = React.useState(true);
    const [isActiveEn, setIsActiveEn] = React.useState(false);

    function handleLangSelect(str) {
        setIsActiveRu(!isActiveRu);
        setIsActiveEn(!isActiveEn);
        props.onLangSelect(str);
    }

    return (
        <ul className="lang-menu">
            <li className="lang-menu__item" >
                <LangMenuButton value='ru' onLangSelect={handleLangSelect} text='ру' isActive={isActiveRu} />
            </li>
            <li className="lang-menu__item">
                <LangMenuButton value='en' onLangSelect={handleLangSelect} text='en' isActive={isActiveEn} />
            </li>
        </ul>
    )
}

export default LangMenu;