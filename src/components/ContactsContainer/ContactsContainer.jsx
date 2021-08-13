import './ContactsContainer.css';

function ContactsContainer(props) {
    const contacts = props.contacts;
    return (
        <div className="section-contacts__address">
            <h3 className="section-contacts__address-title">{contacts.title}</h3>
            <div className="section-contacts__address-row">
                <p className="section-contacts__address-subtitle">{contacts.addressTitle}:</p>
                <div className="section-contacts__address-values">
                    <p className="section-contacts__address-text">{contacts.country}</p>
                    <p className="section-contacts__address-text">{contacts.city}</p>
                    <p className="section-contacts__address-text">{contacts.street} {contacts.number}</p>
                </div>
            </div>
            <div className="section-contacts__address-row">
                <p className="section-contacts__address-subtitle">{contacts.phoneTitle}:</p>
                <p className="section-contacts__address-text">{contacts.index}</p>
            </div>
            <div className="section-contacts__address-row">
                <p className="section-contacts__address-subtitle">{contacts.indexTitle}:</p>
                <p className="section-contacts__address-text">{contacts.phone}</p>
            </div>
            <div className="section-contacts__address-row">
                <p className="section-contacts__address-subtitle">{contacts.emailTitle}:</p>
                <p className="section-contacts__address-text">{contacts.email}</p>
            </div>
        </div>
    )
}

export default ContactsContainer;
