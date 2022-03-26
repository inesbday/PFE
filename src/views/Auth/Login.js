import React from "react";
import styles from "./login.module.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Input,
  FormGroup,
  Form,
  Label,
  Container,
  Row,
} from "reactstrap";

function Login() {
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
              />
            </FormGroup>
          </Form>

          <Button className="btn-info">Log-in</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
