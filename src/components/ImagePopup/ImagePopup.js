import './ImagePopup.css';

function ImagePopup(props) {

    return (
        !!props.photo ?
            <div className={'overlay overlay_visible'}>
                <div className="popup popup_purpose_view-photo">
                    <img className="popup__image" src={props.photo.link} alt={"фото " + props.photo.name} />
                    <h2 className="popup__title popup__title_purpose_view-photo">{props.photo.name}</h2>
                    <button aria-label="закрыть" type="button" className="popup__button-close" onClick={props.onClose}></button>
                </div>
            </div>
            : <div className={'overlay '}></div>

    )
}

export default ImagePopup;