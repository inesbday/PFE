import React from "react";
import Table from "./Table";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
function MissionChauffeur() {
  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center">
        <h4>Mes missions ( pour les chauffeurs) </h4>
      </Row>
      <Row className="mt-5">
        <Table />
      </Row>
    </Container>
  );
}

export default MissionChauffeur;
