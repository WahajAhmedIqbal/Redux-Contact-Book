import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deletecontact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

function Contact(props) {
  const dispatch = useDispatch();
  const { name, phone, email, id } = props.contact;
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
          <Link to={`/contacts/edit/${id}`}>
            <span className="material-icons "> edit</span>
          </Link>

          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(deletecontact(id))}
          >
            remove_circle
          </span>
        </td>
      </tr>
    </>
  );
}
export default Contact;
