import React from "react";
import "./styles/App.scss";
import NavbarComp from "./components/Navbar";
import ContactComp from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContactComp from "./components/contacts/AddContact";
import EditContactComp from "./components/contacts/Editcontants";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavbarComp />
          <div className="container">
            <div className="py-1">
              <Switch>
                <Route exact path="/" component={ContactComp} />
                <Route exact path="/contacts/add" component={AddContactComp} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContactComp}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
