import './Links.css'

function Links(props) {

    return (
        <div className={props.isMenuOpen ? "menu__links menu__links_visible" : "menu__links"} onClick={props.onClick}>
            {props.linkList.map((item, index) =>
                <a href={`#${props.links[index]}`} key={index} className="menu__link">{item}</a>)
            }
        </div>
    )
}

export default Links;