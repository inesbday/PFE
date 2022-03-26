import React from "react";

import { Modal, Button, Row, Col } from "react-bootstrap";

function ViewMoreChauffeurs({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Fiche technique</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Chauffeur : Ahmed Ali </h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Nom:</h5>
              <p className="col-6 text-left">Ahmed</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Prenom</h5>
              <p className="col-6 text-left">Ali</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">N° Cin </h5>
              <p className="col-6">12812581</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Numero tel:</h5>
              <p className="col-6 text-left">55-555-555</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Adresse:</h5>
              <p className="col-6 text-left">Sousse jawhara</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Num Permis:</h5>
              <p className="col-6 text-left">123456789</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date de naissance:</h5>
              <p className="col-6">20-20-1990</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">type</h5>
              <p className="col-6">type 1</p>
            </Row>
          </Col>

          <Col>
            <img
              src="https://www.kindpng.com/picc/m/14-148242_the-logo-kind-of-looks-like-a-person.png"
              width={200}
            />
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

export default ViewMoreChauffeurs;
