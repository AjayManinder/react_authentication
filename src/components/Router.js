import React from "react";
import { Route, Routes } from "react-router-dom";

import Sample from "./sample";
import Login from "./Login";
import SignUp from "./SignUp";

const RouterMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/sample" element={<Sample />} />
    </Routes>
  );
};

export default RouterMap;
