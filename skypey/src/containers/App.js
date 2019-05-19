import React from 'react';
import logo from '../logo.svg';
import './App.css';

import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import store from "../store";

function App() {
  const { activeUserId, contacts, user } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={Object.values(contacts)}></Sidebar>
      <Main activeUserId={activeUserId} user={user}></Main>
    </div>
  );
}

export default App;
