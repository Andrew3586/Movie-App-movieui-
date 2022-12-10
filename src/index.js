import React from "react";
//3ca5df7 key
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers";
import Navbar2 from "./components/Navbar2";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

// import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";

// logger({obj})(next)(action)
const logger = ({ dispatch, getState }) => next => action => {
  // middleware code
  if (typeof action !== "function") {
    console.log("ACTION_TYPE = ", action.type);
  }
  next(action); // it calls next middleware
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Navbar2></Navbar2> */}
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
          <Route exact path="/" element={<App store={store} />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    </Router>

    {/* <App store={store} /> */}
  </React.StrictMode>
);
