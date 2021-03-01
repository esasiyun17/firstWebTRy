import React from "react";
import "./App.css";
import Bottom from "./Bottom";
import Footer from "./Footer";
import Intro from "./Intro";
import Navi from "./Navi";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "./Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Switch>
          <Route path="/contact">
            <Contact />
            
          </Route>
          <Route exact path="/">
            <Intro />
            <Bottom />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
