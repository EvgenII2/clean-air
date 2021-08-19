import ButtonMenu from '../ButtonMenu/ButtonMenu';
import './Links.css'

function Links(props) {

    return (
        <div className={props.isMenuOpen ? "menu__links menu__links_visible" : "menu__links"} >
            {props.linkList.map((item, index) =>
                <ButtonMenu item={item} index={index} key={index} links={props.links} onClick={props.handleClick} />
            )}
        </div>
    )
}

export default Links;