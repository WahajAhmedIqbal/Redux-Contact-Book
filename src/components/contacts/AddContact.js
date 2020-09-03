import React, { useState } from "react";

function AddContact() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  const createcontect = (e) => {
    e.preventDefault();
    console.log(name, phone);
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
