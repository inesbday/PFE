import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import InfosCard from "../components/InfosCard/InfosCard";
import LineChart from "../components/Stats/LineChart/LineChart";
import PieChart from "../components/Stats/PieChart/PieChart";
import BarChart from "../components/Stats/BarChart/BarChart";
import ToDoList from "../components/ToDoList/ToDoList";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col lg="4" sm="6">
          <InfosCard
            title="En bonne état"
            infos="5"
            iconName="fa-solid fa-circle-check"
            bgColor="bg-success"
          />
        </Col>

        <Col lg="4" sm="6">
          <InfosCard
            title="Entretien"
            infos="10"
            iconName="fa-solid fa-screwdriver-wrench"
            bgColor="bg-warning"
          />
        </Col>

        <Col lg="4" sm="6">
          <InfosCard
            title="En-panne"
            infos="2"
            iconName="fa-solid fa-triangle-exclamation"
            bgColor="bg-danger"
          />
        </Col>
      </Row>

      <Row>
        <Col md="8">
          <LineChart />
        </Col>
        <Col md="4">
          <PieChart />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <BarChart />
        </Col>
        <Col md="6">
          <ToDoList />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
