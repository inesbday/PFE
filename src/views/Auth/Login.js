import React, { useState } from "react";
import styles from "./login.module.css";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Input,
  FormGroup,
  Form,
  Label,
} from "reactstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const users = useSelector((state) => state.users);
  const history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleLogIn = () => {
    const user = users.filter(({ email }) => email === state.email)[0];

    if (user && state.password) {
      toast.success(`Welcome ${user.nom}`);

      history.push("/admin");
    } else {
      toast.warn("Seems you don't have an account...");
    }
  };

  return (
    <div className={styles.welcome__container}>
      <Card className={styles.login__body}>
        <CardBody className="d-flex flex-column justify-content-center align-items-center">
          <CardTitle>
            <h2>Log-in</h2>
          </CardTitle>

          <Form className="mt-2">
            <FormGroup>
              <Label for="email" className="text-info">
                E-mail
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com"
                value={state.email}
                onChange={(event) => changeCreds(event)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password" className="text-info">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={state.password}
                onChange={(event) => changeCreds(event)}
              />
            </FormGroup>
          </Form>

          <Button className="btn-info" onClick={handleLogIn}>
            Log-in
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
