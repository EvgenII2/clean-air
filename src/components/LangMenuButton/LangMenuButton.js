import React from "react";
import './LangMenuButton.css'

function LangMenuButton(props) {

    function handleLangSelect(e) {
        {
            if (!props.isActive)
                props.onLangSelect(e.currentTarget.value);
        };
    }
    return (
        <button value={props.value} className={props.isActive ?
            'lang-menu__button lang-menu__button_active' :
            'lang-menu__button'}
            onClick={handleLangSelect}>{props.text}</button>
    )
}

export default LangMenuButton;