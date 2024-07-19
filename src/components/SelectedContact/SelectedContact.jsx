import React from "react";
import { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContactId() {
      const res = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      const json = await res.json();
      console.log(json);
      setContact(json);
    }

    fetchContactId();
  }, [selectedContactId]);

  return (
    <div>
      <p>{contact?.name}</p>
      <p>{contact?.email}</p>
      <p>{contact?.phone}</p>
      <p>{contact?.username}</p>
    </div>
  );
}

export default SelectedContact;
