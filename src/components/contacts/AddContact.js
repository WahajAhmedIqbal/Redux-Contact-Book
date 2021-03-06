import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
function AddContact() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  const createcontect = (e) => {
    e.preventDefault();
    console.log(name, phone);
    const newcont = {
      id: shortid.generate(),
      name,
      phone,
      email,
    };
    dispatch(addContact(newcont));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header"> Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createcontect(e)}>
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

export default AddContact;
