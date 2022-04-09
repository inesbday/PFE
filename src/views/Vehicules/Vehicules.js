import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import InfosCard from "../../components/InfosCard/InfosCard";
import Table from "./TableVeh";

function Vehicules() {
  return (
    <Container fluid>
      <Row>
        <Col lg="3" sm="6">
          <InfosCard
            title="En bonne état"
            infos="5"
            iconName="fa-solid fa-car-side"
            bgColor="bg-success"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="En panne"
            infos="2"
            iconName="fa-solid fa-car-side"
            bgColor="bg-danger"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="En entretien"
            infos="5"
            iconName="fa-solid fa-car-side"
            bgColor="bg-warning"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="En mission"
            infos="5"
            iconName="fa-solid fa-car-side"
            bgColor="bg-info"
          />
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Liste des vehicules </Card.Title>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive">
              <Table />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Vehicules;
