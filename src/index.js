import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/light-bootstrap-dashboard-react.css";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import Login from "./views/Auth/Login";
import ForgotPassword from "./views/Auth/ForgotPassword";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <App {...props} />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/forgotpassword" render={() => <ForgotPassword />} />

      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
