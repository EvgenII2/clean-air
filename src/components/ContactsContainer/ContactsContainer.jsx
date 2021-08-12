import './ContactsContainer.css';

function ContactsContainer(props) {
    return (
        <div className="section-contacts__address">
            <p>{props.contacts.title}</p>
            <p>{props.contacts.city}</p>
            <p>{props.contacts.street}</p>
            <p>{props.contacts.country}</p>
            <p>{props.contacts.number}</p>
            <p>{props.contacts.index}</p>
            <p>{props.contacts.phone}</p>
            <p>{props.contacts.email}</p>
        </div>
    )
}

export default ContactsContainer;