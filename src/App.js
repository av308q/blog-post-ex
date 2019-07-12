import React from 'react';
import {BrowserRouter as Router, router, link} from "react-router-dom";
import * as Data from "./data/data.json";

import Header from "./components/header";
import listLayout from "./components/listLayout";
import Footer from "./components/footer";

import Wrapper from "./sharedComponents/wrapper";

import './App.css';

function App() {
  return (
    // <Router>
    <div className="App">
      <Header />
      <wrapper>
      <listLayout posts={Data}/>
      </wrapper>
      <footer />
    </div>
  );
}

export default App;
