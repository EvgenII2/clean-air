import React from "react"
import { TranslationContext } from "../../context/TranslationContext"
import './MainMenu.css'

function MainMenu(props) {
    const translation = React.useContext(TranslationContext);

    function getMenuItem() {
        return (
            translation.mainMenu.map((item, index) =>
                <li className="menu__item" key={index}>
                    <a href={`#${props.links[index]}`} className="menu__link">{item}</a>
                </li >
            )
        );
    }

    return (
        <ul className="section menu" key={translation.mainMenu}>
            {getMenuItem()}
        </ul>
    )
}

export default MainMenu;