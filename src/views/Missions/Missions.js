import React, { useState } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import Table from "./Table";
import AjouterMission from "../../components/Modals/AjouterMission/AjouterMission";
import InfosCard from "../../components/InfosCard/InfosCard";
function Missions() {
  const [openAjouterMission, setOpenAjouterMission] = useState(false);

  const toggleOpenAjouterMission = () => {
    setOpenAjouterMission(!openAjouterMission);
  };

  return (
    <Container>
      <Row>
        <Col lg="3" sm="6">
          <InfosCard
            title="effectués"
            infos="5"
            iconName="fa-solid fa-circle-check"
            bgColor="bg-success"
            //linkCard="/admin/vehicules"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="En cours"
            infos="10"
            iconName="fa-solid fa-spinner "
            bgColor="bg-warning"
            //linkCard="/admin/Chauffeurs"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Attentes"
            infos="2"
            iconName="fa-solid fa-clock"
            bgColor="bg-info"
            //linkCard="/admin/Mecaniciens"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Annulées"
            infos="5"
            iconName="fa-solid fa-ban"
            bgColor="bg-danger"
            //linkCard="/admin/Missions"
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-between align-items-center">
        <h4>Liste des missions</h4>

        <Button className="btn-primary" onClick={toggleOpenAjouterMission}>
          Ajouter mission
        </Button>
      </Row>

      <Row className="mt-5">
        <Table />
      </Row>

      {openAjouterMission && (
        <AjouterMission
          show={openAjouterMission}
          handleClose={toggleOpenAjouterMission}
        />
      )}
    </Container>
  );
}
export default Missions;
