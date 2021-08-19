import './ButtonMenu.css';

function ButtonMenu(props) {

    return (
        <button key={props.index} className="menu__link" onClick={() => {
            const offset = document.querySelector(`menu`).offsetHeight;
            window.scrollBy({
                left: 0,
                top: (document.querySelector(`#${props.links[props.index]}`).getBoundingClientRect().top - offset)
                , behavior: "smooth"
            });
            props.onClick();
        }}>{props.item}
        </button>
    )
}

export default ButtonMenu;