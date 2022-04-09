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
import { Provider } from "react-redux";
import store from "./redux/store";
import Test from "./views/Test";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer pauseOnHover={false} autoClose={2000} />
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <App {...props} />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/forgotpassword" render={() => <ForgotPassword />} />

        <Route path="/test" render={() => <Test />} />

        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
