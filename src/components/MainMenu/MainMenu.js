import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import "./MainMenu.css";
import iconMenu from "../../images/burger-menu-icon.png";
import iconHome from "../../images/home-icon.png";
import Links from "../Links/Links";

function MainMenu({
  toHeader,
  toDesc,
  toScheme,
  toAdvanteges,
  toModels,
  toParam,
  toApplications,
  toContacts,
}) {
  const translation = React.useContext(TranslationContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  const refs = [
    toDesc,
    toScheme,
    toAdvanteges,
    toModels,
    toParam,
    toApplications,
    toContacts,
  ];
  return (
    <menu className="menu">
      <div className="menu_mobile">
        <button
          className="menu__icon-home"
          onClick={() => {
            toHeader();
          }}
        >
          <img className="menu__image" src={iconHome} alt="icon home" />
        </button>
        <button className="menu__icon-burger" onClick={handleClick}>
          <img className="menu__image" src={iconMenu} alt="icon menu" />
        </button>
      </div>
      <Links
        refs={refs}
        isMenuOpen={isMenuOpen}
        linkList={translation.mainMenu}
        handleClick={handleClick}
      />
    </menu>
  );
}

export default MainMenu;
