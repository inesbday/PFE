import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import InfosCard from "../../components/InfosCard/InfosCard";
import ViewMoreCars from "../../components/Modals/ViewMoreCars/ViewMoreCars";
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
        <Table />
      </Row>
    </Container>
  );
}

export default Vehicules;
