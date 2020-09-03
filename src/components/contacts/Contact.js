import React from "react";
import Avatar from "react-avatar";

function Contact(props) {
  const { name, phone, email } = props.contact;
  return (
    <>
      <tr>
        <td>
          {/* <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" />
            <label className="custom-control-label"></label>
          </div> */}
          <Avatar className="m-20" name={name} size="50" round={true} />
        </td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td className="actions">
          <a href="#">
            <span className="material-icons "> edit</span>
          </a>
          <a href="#">
            <span className="material-icons text-danger">remove_circle</span>
          </a>
        </td>
      </tr>
    </>
  );
}
export default Contact;
