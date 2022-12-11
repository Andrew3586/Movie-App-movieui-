import "bootstrap/dist/css/bootstrap.css";
import React from "react";
// import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import "../index.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function Navbar2() {
  return (
    <Router>
      <div>
        {/* <h1>React Router Example</h1> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar2;
