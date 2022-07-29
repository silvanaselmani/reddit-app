import React from "react";
//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import { NavBar } from "./features/NavBar/NavBar";
import Nav from "./features/Nav/Nav";
import Posts from "./features/Posts/Posts";
import Comments from "../src/features/Comments/Comments";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Route>
          <Nav />
        </Route>
        <Switch>
          <Route path={"/comments"}>
            <Comments />
          </Route>

          <Route exact path={"/"}>
            <Posts />
          </Route>
          <Route path={"/:name"}>
            <Posts />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
export default App;
