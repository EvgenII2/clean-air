import ButtonMenu from "../ButtonMenu/ButtonMenu";
import "./Links.css";

function Links({ refs, isMenuOpen, linkList, handleClick }) {
  return (
    <div
      className={isMenuOpen ? "menu__links menu__links_visible" : "menu__links"}
    >
      {linkList.map((item, index) => (
        <ButtonMenu
          item={item}
          index={index}
          key={index}
          handleClick={handleClick}
          refs={refs}
        />
      ))}
    </div>
  );
}

export default Links;
