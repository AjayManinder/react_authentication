import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import Sample from "./sample";
import Login from "./Login";
import SignUp from "./SignUp";
import Header from "./Header";


const RouterMap = () => {
  return (
    <Router>    
      <Header/>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/sample" element={<Sample />} />
        
      </Routes>
      </Router>

  );
};

export default RouterMap;
