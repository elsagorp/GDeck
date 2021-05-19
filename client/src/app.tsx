import React from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import BoardList from "./components/Board/BoardList";
import BoardForm from "./components/Board/BoardForm";
import Navbar from "./components/Navbar/Navbar";
import DeckList from "./components/Deck/DeckList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={BoardList}></Route>
          <Route path="/new-board" component={BoardForm}></Route>
          <Route path="/board/:boardId" component={DeckList}></Route>
        </Switch>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
