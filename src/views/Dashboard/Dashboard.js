import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import InfosCard from "../../components/InfosCard/InfosCard";
import PieChart from "../../components/Stats/PieChart/PieChart";
import MissionstatsCard from "../../components/MissionStatsCard/MissionstatsCard";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col lg="3" sm="6">
          <InfosCard
            title="Vehicules"
            infos="5"
            iconName="fa-solid fa-car-side"
            bgColor="bg-success"
            linkCard="/admin/vehicules"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Chauffeurs"
            infos="10"
            iconName="fa-solid fa-user "
            bgColor="bg-warning"
            linkCard="/admin/Chauffeurs"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Mecaniciens"
            infos="2"
            iconName="fa-solid fa-user"
            bgColor="bg-info"
            linkCard="/admin/Mecaniciens"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Missions"
            infos="5"
            iconName="fa-solid fa-list"
            bgColor="bg-danger"
            linkCard="/admin/Missions"
          />
        </Col>
      </Row>

      <Row>
        <Col lg="7" sm="6">
          <MissionstatsCard />
        </Col>
        <Col lg="5" sm="6">
          <PieChart />
        </Col>
      </Row>

      <Row>
        <Col>
          <Stack spacing={2}>
            <Alert variant="filled" severity="error">
              Le chauffeur X a declaré un accident !{" "}
            </Alert>
            <Alert variant="filled" severity="warning">
              4 Assurance(s) seront périmées apres 4 jours !
            </Alert>
            <Alert variant="filled" severity="info">
              This is an info alert — check it out!
            </Alert>
            <Alert variant="filled" severity="success">
              This is a success alert — check it out!
            </Alert>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
