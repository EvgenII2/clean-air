import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import './MainMenu.css';
import changeMenu from '../../utils/utils';
import iconMenu from '../../images/burger-menu-icon.png'
import iconHome from '../../images/home-icon.png'

function MainMenu(props) {
    const translation = React.useContext(TranslationContext);

    function getMenuItem() {
        return (
            translation.mainMenu.map((item, index) =>
                <a href={`#${props.links[index]}`} key={index} className="menu__link">{item}</a>
            )
        );
    }

    return (
        <menu className="menu">
            <div className="menu_mobile">
                <a href="#home" className="menu__icon-home">
                    <img className="menu__image" src={iconHome} />
                </a>
                <button className="menu__icon-burger" onClick={() => changeMenu('.menu__links')}>
                    <img className="menu__image" src={iconMenu} />
                </button>
            </div>
            <div className="menu__links" key={translation.mainMenu} onClick={() => changeMenu('.menu__links')}>
                {getMenuItem()}
            </div>

        </menu>

    )
}

export default MainMenu;