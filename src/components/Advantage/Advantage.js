import './Advantage.css'

function Advantage(props) {

    const text = props.adv.text;
    function getText(text) {
        return (
            <p className="section-advantages__paragraph-text">{text}</p>
        )
    }
    function getList(text) {
        return (
            <ul className="section-advantages__paragraph-text">
                {text.map((item, index) =>
                (<li key={index}>
                    {item}
                </li>)
                )}
            </ul>
        )
    }

    return (
        <li className="section-advantages__paragraph" >
            <h3 className='section-advantages__paragraph-title'>{props.adv.title}</h3>
            {Array.isArray(text) ? getList(text) : getText(text)}
        </li>
    )
}

export default Advantage;