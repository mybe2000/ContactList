import React, { useEffect } from "react";
import { useState } from "react";
import ContactRow from "../ContactRow/ContactRow";

function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    async function fetchContacts() {
      const res = await fetch(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
      );
      const json = await res.json();
      setContacts(json);
      console.log(json);
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ContactList</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              props={contact}
              key={contact.id}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ContactList;
