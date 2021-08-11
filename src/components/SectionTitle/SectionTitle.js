import './SectionTitle.css';

function SectionTitle(props) {
    return (
        <h2 id={props.link} className="section-title">
            {props.title} {props.children}
        </h2>
    )
}

export default SectionTitle;