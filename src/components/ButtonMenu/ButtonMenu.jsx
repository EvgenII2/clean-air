import "./ButtonMenu.css";

function ButtonMenu({ item, index, refs, handleClick }) {
  return (
    <button
      key={index}
      className="menu__link"
      onClick={() => {
        refs[index]();
        handleClick();
      }}
    >
      {item}
    </button>
  );
}

export default ButtonMenu;
