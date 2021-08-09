import React from "react"
import { TranslationContext } from "../../context/TranslationContext"
import './MainMenu.css'

function MainMenu(props) {
    const translation = React.useContext(TranslationContext);

    function getMenuItem() {
        return (
            translation.mainMenu.map(item =>
                <li class="menu__item">
                    <a href={`#${item}`} class="menu__link">{item}</a>
                </li >
            )
        );
    }

    return (
        <ul class="section menu">
            {getMenuItem()}

        </ul>
    )
}

export default MainMenu;