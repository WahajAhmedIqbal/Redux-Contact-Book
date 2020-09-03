import React from "react";
import { useSelector } from "react-redux";
import ContactComp from "./Contact";
function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  //   console.log("e====> ", contacts);
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <label className="custom-control-label"></label>
            </div>
          </th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">E-mail</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactComp contact={contact} />
        ))}
      </tbody>
    </table>
  );
}

export default Contacts;
