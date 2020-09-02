import React from "react";
import "./styles/App.scss";
import NavbarComp from "./components/Navbar";
import ContactComp from "./components/contacts/Contacts";
import { provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <provider store={store}>
      <div className="App">
        <NavbarComp />
        <div className="container">
          <div className="py-1">
            <ContactComp />
          </div>
        </div>
      </div>
    </provider>
  );
}

export default App;
