import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontact, updatecontact } from "../../actions/contactAction";
// import shortid from "shortid";
import { useParams, useHistory } from "react-router-dom";

function EditContacts() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  let history = useHistory();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    if (contact != null) {
      setname(contact.name);
      setphone(contact.phone);
      setemail(contact.email);
    }
    dispatch(getcontact(id));
  }, [contact]);

  const onupdatecontact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name,
      phone,
      email,
    });
    dispatch(updatecontact(update_contact));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header"> Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onupdatecontact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter You're Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter You're Phone no"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter You're Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditContacts;
