import React from "react";
import { useSelector } from "react-redux";

function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  console.log("e====> ", contacts);
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
