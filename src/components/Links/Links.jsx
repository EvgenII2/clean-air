import './Links.css'

function Links(props) {

    return (
        <div className={props.isMenuOpen ? "menu__links menu__links_visible" : "menu__links"} >
            {props.linkList.map((item, index) =>
                <button key={index} className="menu__link" onClick={() => {
                    const offset = document.querySelector(`menu`).offsetHeight;
                    window.scrollBy({
                        left: 0,
                        top: (document.querySelector(`#${props.links[index]}`).getBoundingClientRect().top - offset)
                        , behavior: "smooth"
                    });
                    props.onClick();
                }}>{item} </button>)
            }
        </div>
    )
}

export default Links;