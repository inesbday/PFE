import React from "react";

import { Modal, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Input, Label } from "reactstrap";

function ViewMore({ show, handleClose, rowID }) {
  const {
    numero,
    date,
    client,
    typeFacture,
    vehicule,
    remorque,
    chauffeur,
    representant,

    etat,
  } = useSelector((state) => state.missions).filter(
    ({ id }) => id === rowID
  )[0];

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Mission M{rowID[0]} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Informations mission:</h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Date:</h5>
              <p className="col-6 text-left">{date}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Clients:</h5>
              <p className="col-6 text-left">{client}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Type de facturation:</h5>
              <p className="col-6 text-left">{typeFacture}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Véhicule:</h5>
              <p className="col-6 text-left">{vehicule}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Remorque:</h5>
              <p className="col-6 text-left">{remorque}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Chauffeur:</h5>
              <p className="col-6">{chauffeur}</p>
            </Row>
          </Col>

          <Col>
            <Row>
              <FormGroup>
                <Label>Etat</Label>
                <Input type="select">
                  <option selected={etat === "attente"}>En attente</option>
                  <option selected={etat === "en_cours"}>En cours</option>
                  <option selected={etat === "annulée"}>Annulée</option>
                  <option selected={etat === "effectuée"}>Effectuée</option>
                </Input>
                <Button className="mt-2">Met jour l'état</Button>
              </FormGroup>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end align-items-center pb-1">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewMore;
