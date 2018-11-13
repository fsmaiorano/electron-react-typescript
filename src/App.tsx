import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
