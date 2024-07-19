import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SelectedContact from "./components/SelectedContact/SelectedContact";

function App({ contact }) {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
