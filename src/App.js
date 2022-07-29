import React from "react";
//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import { NavBar } from "./features/NavBar/NavBar";
import Nav from "./features/Nav/Nav";
import Posts from "./features/Posts/Posts";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Route>
          <Nav />
        </Route>

        <Route exact path={"/"}>
          <Posts />
        </Route>
        <Route path={"/:name"}>
          <Posts />
        </Route>
      </main>
    </Router>
  );
}
export default App;
