import React, { Fragment } from "react";
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
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Test from "./views/Test";
import { ToastContainer } from "react-toastify";

function Index() {
  const { user } = useSelector((state) => state.auth);
  const { auth } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <ToastContainer pauseOnHover={false} autoClose={2000} />
      <BrowserRouter>
        <Switch>
          {user && (
            <Route
              path={`/${user.role}`}
              render={(props) => <App {...props} />}
            />
          )}
          

          <Route path="/login" render={() => <Login />} />
          <Route path="/forgotpassword" render={() => <ForgotPassword />} />

          <Route path="/test" render={() => <Test />} />

          {auth ? (
            <Redirect from="/" to={user.defaultPath} />
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer pauseOnHover={false} autoClose={2000} />
    <Index />
  </Provider>,
  document.getElementById("root")
);
