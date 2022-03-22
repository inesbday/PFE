import React from "react";
import Table from "./Table";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
function Meco() {
  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center">
        <h4>Mes missions</h4>
      </Row>
      <Row className="mt-5">
        <Table />
      </Row>
    </Container>
  );
}

export default Meco;
