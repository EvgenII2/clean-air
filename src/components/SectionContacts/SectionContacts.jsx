import './SectionContacts.css';
import React from 'react';
import { TranslationContext } from '../../context/TranslationContext';
import SectionTitle from "../SectionTitle/SectionTitle";
import MapContainer from '../MapContainer/MapContainer';
import ContactsContainer from '../ContactsContainer/ContactsContainer';

function SectionContacts(props) {

    const translation = React.useContext(TranslationContext);

    return (
        <div id={props.link} className="section-contacts">
            <SectionTitle title={translation.sectionContactsTitle} />
            <div className="section-contacts__contacts-container">
                <MapContainer />
                <ContactsContainer contacts={translation.sectionContactsValue} />
            </div>
        </div>
    )
}

export default SectionContacts;