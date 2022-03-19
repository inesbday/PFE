import React, { useState } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import Table from "./Table";
import AjouterMission from "../../components/Modals/AjouterMission/AjouterMission";

function Missions() {
  const [openAjouterMission, setOpenAjouterMission] = useState(false);

  const toggleOpenAjouterMission = () => {
    setOpenAjouterMission(!openAjouterMission);
  };

  return (
    <Container>
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
