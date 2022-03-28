import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Table from "./Table";
import AjouterAmende from "../../components/Modals/AjouterAmende/AjouterAmende.js";
function Amendes() {
  const [openAjouterAmende, setOpenAjouterAmende] = useState(false);

  const toggleOpenAjouterAmende = () => {
    setOpenAjouterAmende(!openAjouterAmende);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center">
        <h4>Liste des Amendes</h4>
        <Button className="btn btn-danger " onClick={toggleOpenAjouterAmende}>
          Declarer une amende
        </Button>
      </Row>

      <Row className="mt-5">
        <Table />
      </Row>

      {openAjouterAmende && (
        <AjouterAmende
          show={openAjouterAmende}
          handleClose={toggleOpenAjouterAmende}
        />
      )}
    </Container>
  );
}
export default Amendes;
