import React, { Component } from "react";
import "./App.css";

// import redux
import { Provider } from "react-redux";

import store from "./store";

// impourt auth
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

// import router
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user infor and exp
  const decode = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decode));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
