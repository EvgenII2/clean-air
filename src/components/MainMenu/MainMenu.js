import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import './MainMenu.css';
import iconMenu from '../../images/burger-menu-icon.png'
import iconHome from '../../images/home-icon.png'
import Links from '../Links/Links';

function MainMenu(props) {

    const translation = React.useContext(TranslationContext);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function handleClick() {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    return (
        <menu className="menu">
            <div className="menu_mobile">
                <a href="#home" className="menu__icon-home">
                    <img className="menu__image" src={iconHome} alt="icon home" />
                </a>
                <button className="menu__icon-burger" onClick={handleClick}>
                    <img className="menu__image" src={iconMenu} alt="icon menu" />
                </button>
            </div>
            <Links links={props.links} isMenuOpen={isMenuOpen} linkList={translation.mainMenu} onClick={handleClick} />
        </menu>
    )
}

export default MainMenu;