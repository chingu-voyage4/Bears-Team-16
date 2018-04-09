import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
  <Router basename={process.env.PUBLIC_URL}>
      <div >
      <Header />
        <div style={{  minHeight: `calc(100vh - 40px)` }}>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/AuthExample" component={AuthExample} />
      <Route path="/signup" component={Signup} />
      <Route path="/browse" component={Browse} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
        </div>
      <Footer />
    </div>
  </Router>
);

export default App;
