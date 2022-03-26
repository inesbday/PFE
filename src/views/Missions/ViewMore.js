import React from "react";

import { Modal, Button, Row, Col, FormGroup } from "react-bootstrap";
import { Input, Label } from "reactstrap";

function ViewMore({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Mission M01 </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Informations mission:</h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Date:</h5>
              <p className="col-6 text-left">20/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Clients:</h5>
              <p className="col-6 text-left">Ines Bday</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Type de facturation:</h5>
              <p className="col-6 text-left">Type 1</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Véhicule:</h5>
              <p className="col-6 text-left">Peugot</p>
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
              <h5 className="text-info col-6">N° BT:</h5>
              <p className="col-6">123456</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date BT:</h5>
              <p className="col-6">22/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">N° bon réception:</h5>
              <p className="col-6">22/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date bon réception:</h5>
              <p className="col-6">22/03/2022</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Produit :</h5>
              <p className="col-6">blé</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Unité</h5>
              <p className="col-6">KG</p>
            </Row>
          </Col>

          <Col>
            <Row>
              <h5 className="text-info col-6">Lieu depart:</h5>
              <p className="col-6">sousse</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">lieu arrivée</h5>
              <p className="col-6">sfax</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Distance</h5>
              <p className="col-6">0</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Quantité</h5>
              <p className="col-6">0.0000</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Ecart poinds</h5>
              <p className="col-6">0.000</p>
            </Row>
            <Row>
              <FormGroup>
                <Label>Etat</Label>
                <Input type="select">
                  <option>En attente</option>
                  <option>En cours</option>
                  <option>Annulée</option>
                  <option>Effectuée</option>
                </Input>
                <Button className="mt-2">Met à jour l'état</Button>
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
