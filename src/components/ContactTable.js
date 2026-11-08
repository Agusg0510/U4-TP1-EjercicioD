import React from "react";
import styles from "../styles/ContactTable.module.css";

const ContactTable = ({ contacts, deleteContact, editContact }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.contactTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button
                  onClick={() => editContact(contact)}
                  className={styles.editButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteContact(contact.email)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
