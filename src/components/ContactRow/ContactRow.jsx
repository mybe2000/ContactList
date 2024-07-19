import React, { useEffect, useState } from "react";

function ContactRow({ props, setSelectedContactId }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(props.id);
      }}
    >
      {/* <td>{props.id}</td> */}
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default ContactRow;
