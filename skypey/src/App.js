import React from 'react';
import _ from "lodash";
import logo from './logo.svg';
import './App.css';

import Main from "./Panels/Main";
import Sidebar from "./Panels/Sidebar";
import store from "./store/index";

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}></Sidebar>
      <Main></Main>
    </div>
  );
}

export default App;
