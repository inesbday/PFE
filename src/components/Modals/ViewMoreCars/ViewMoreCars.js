import React from "react";

import { Modal, Button, Row, Col } from "react-bootstrap";

function ViewMoreCars({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Fiche technique</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Mercedes </h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Date:</h5>
              <p className="col-6 text-left">20/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Matricule</h5>
              <p className="col-6 text-left">33-999-22</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Carte grise:</h5>
              <p className="col-6 text-left">Type 1</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">type carburant</h5>
              <p className="col-6 text-left">Essence</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Remorque:</h5>
              <p className="col-6 text-left">R1</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Chauffeur:</h5>
              <p className="col-6">Mohamed mohamed</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">N° </h5>
              <p className="col-6">123456</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date :</h5>
              <p className="col-6">22/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date bon réception:</h5>
              <p className="col-6">22/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">type</h5>
              <p className="col-6">type 1</p>
            </Row>
          </Col>

          <Col>
            <img
              src="https://i.pinim
              g.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png"
              
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

export default ViewMoreCars;
