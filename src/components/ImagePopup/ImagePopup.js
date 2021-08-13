import './ImagePopup.css';

function ImagePopup(props) {

    function handleClick(e) {
        e.preventDefault();
        if (e.target.classList.contains('overlay')) {
            props.onClose();
            console.log(e.target.scrollY());
            e.target.focus();
        }

    }
    return (
        !!props.photo ?
            <div className={'overlay overlay_visible'} onClick={handleClick}>
                <div className="popup">
                    <img className="popup__image" src={props.photo.link} alt={"фото " + props.photo.name} />
                    <h2 className="popup__title">{props.photo.name}</h2>
                    <button aria-label="закрыть" type="button" className="popup__button-close" onClick={props.onClose}></button>
                </div>
            </div>
            : <div className={'overlay '}></div>

    )
}

export default ImagePopup;