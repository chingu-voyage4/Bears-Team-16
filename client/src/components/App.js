import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css'

/* LAYOUT COMPONENTS */
import Header from "./layout/Header/Header";
// import Footer from "./layout/Footer/Footer";
import Home from "./layout/Home";
import About from "./layout/About";
import Browse from "./layout/Browse";
import Contact from "./layout/Contact";
/* AUTH COMPONENTS */
import Login from "./auth/Login";
import Signup from "./auth/Signup/Signup";
/* OTHER COMPONENTS */
import AddRecipe from './recipes/AddRecipe';

const App = () => (
  <Router>
    <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/browse" component={Browse} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/addrecipe" component={AddRecipe} />
        {/* <Footer /> */}
      </div>
  </Router>
);

export default App;
