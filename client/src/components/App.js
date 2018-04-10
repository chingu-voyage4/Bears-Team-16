import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* LAYOUT COMPONENTS */
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Home from "./layout/Home";
import About from "./layout/About";
import Browse from "./layout/Browse";
import Contact from "./layout/Contact";
import LandingPage from "./layout/LandingPage";
/* AUTH COMPONENT */
import Signin from "./auth/Signin";
/* OTHER */
import { UserContext } from "./Context";
import { decodeToken } from "../utils/jwt";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }

  componentWillMount() {
    this.setState({
      user: decodeToken(`recipes`),
    });
  }

  login = token => {
    window.localStorage.setItem(`recipes`, token);
    this.setState({ user: decodeToken(`recipes`) });
  }

  logout = () => {
    window.localStorage.removeItem(`recipes`);
    // TODO invalidate token serverside
    this.setState({ user: false });
  }

  render() {
    return (
      <UserContext.Provider value={{ user: this.state.user, login: this.login, logout: this.logout }}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route path="/signin" component={Signin} />
            <Route path="/browse" component={Browse} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </div>
        </Router>
      </UserContext.Provider>
    );
  }
}
