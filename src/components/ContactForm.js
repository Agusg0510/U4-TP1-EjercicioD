import React, { useEffect, useState } from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = ({ addContact, editContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setEmail(editContact.email);
      setPhone(editContact.phone);
    } else {
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      addContact({ name, email, phone });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          {editContact ? "Update contact" : "Add contact"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
