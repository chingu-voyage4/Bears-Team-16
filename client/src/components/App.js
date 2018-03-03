import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Footer />
        </div>
    </Router>
);

export default App;
