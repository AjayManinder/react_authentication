import "./App.css";
import React from "react";
import "./components/LogSing.css";
import { Route, Routes } from "react-router-dom";

import Sample from "./components/sample";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header"> */}
<Header/>
          <Routes>
            {/* <Route path="/" element={<Header />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/sample" element={<Sample />} />
          </Routes>
        <Footer/>
      </div>
      // </div>
    );
  }
}
