import './ApplicationItem.css';

function ApplicationItem(props) {
    return (
        <li className="section-application__item" >
            <img className='section-application__item-icon' src={props.item.link} alt={props.item.title} />
            <h3 className='section-application__item-title'>{props.item.title}</h3>
        </li>
    )
}

export default ApplicationItem;