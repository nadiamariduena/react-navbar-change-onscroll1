import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Content />
      </Router>
    </>
  );
}

export default App;

/*

    <Route path="/" exact />  is the HOME PAGE
 */
