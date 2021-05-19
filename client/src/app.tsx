import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import BoardList from "./components/Board/BoardList";
import BoardForm from "./components/Board/BoardForm";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={BoardList}></Route>
          <Route path="/new-board" component={BoardForm}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
