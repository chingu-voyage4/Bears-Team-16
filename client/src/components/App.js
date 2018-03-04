import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* LAYOUT COMPONENTS */
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
/* AUTH COMPONENTS */
import Login from "./auth/Login";
import Signup from "./auth/Signup";
/* OTHER COMPONENTS */
import Home from "./Home";

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Footer />
        </div>
    </Router>
);

export default App;