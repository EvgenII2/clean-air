import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import './MainMenu.css';
import changeMenu from '../../utils/utils';

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
                    <i className="fas fa-home"></i>
                </a>
                <button className="menu__icon-burger" onClick={() => changeMenu('.menu__links')}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="menu__links" key={translation.mainMenu} onClick={() => changeMenu('.menu__links')}>
                {getMenuItem()}
            </div>

        </menu>

    )
}

export default MainMenu;