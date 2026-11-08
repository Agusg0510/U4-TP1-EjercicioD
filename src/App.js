import styles from "./styles/App.module.css";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [editContact, setEditContact] = useState(null);

  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (contact) => {
    if (editContact) {
      setContacts(
        contacts.map((c) => (c.email === editContact.email ? contact : c)),
      );
      setEditContact(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (email) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };

  const editContactHandler = (contact) => {
    setEditContact(contact);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerms.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerms.toLowerCase()) ||
      contact.phone.includes(searchTerms),
  );

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.heading}>Contact Keeper</h1>
      <input
        type="text"
        placeholder="Search Contacts"
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.mainContent}>
        <ContactForm addContact={addContact} editContact={editContact} />
        <ContactTable
          contacts={filteredContacts}
          deleteContact={deleteContact}
          editContact={editContactHandler}
        />
      </div>
    </div>
  );
}

export default App;
