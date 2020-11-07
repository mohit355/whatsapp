// import { Switch } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
