import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css'

/* LAYOUT COMPONENTS */
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Home from "./layout/Home";
import About from "./layout/About";
import Browse from "./layout/Browse";
import Contact from "./layout/Contact";
/* AUTH COMPONENTS */
import Login from "./auth/Login";
import Signup from "./auth/Signup/Signup";
import AuthExample from "./auth/AuthExample";
/* OTHER COMPONENTS */

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route path={`${process.env.PUBLIC_URL}/AuthExample`} component={AuthExample} />
      <Route path={`${process.env.PUBLIC_URL}/signup`} omponent={Signup} />
      <Route path={`${process.env.PUBLIC_URL}/browse`} omponent={Browse} />
      <Route path={`${process.env.PUBLIC_URL}/about`} omponent={About} />
      <Route path={`${process.env.PUBLIC_URL}/contact`} omponent={Contact} />
      <Footer />
    </div>
  </Router>
);

export default App;
