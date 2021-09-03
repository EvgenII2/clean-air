import "./SectionContacts.css";
import React from "react";
import { TranslationContext } from "../../context/TranslationContext";
import SectionTitle from "../SectionTitle/SectionTitle";
import MapContainer from "../MapContainer/MapContainer";
import ContactsContainer from "../ContactsContainer/ContactsContainer";

const SectionContacts = React.forwardRef(({}, ref) => {
  const translation = React.useContext(TranslationContext);

  return (
    <section ref={ref} className="section-contacts">
      <SectionTitle title={translation.sectionContactsTitle} />
      <div className="section-contacts__contacts-container">
        <MapContainer />
        <ContactsContainer contacts={translation.sectionContactsValue} />
      </div>
    </section>
  );
});

export default SectionContacts;
