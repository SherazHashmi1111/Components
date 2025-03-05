import React, { Fragment } from "react";
import Navbar from "./Navbar.jsx";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
