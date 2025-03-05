import React, { Fragment } from "react";
import Navbar from "./Navbar.jsx";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}

export default App;
