import React from "react";

import { Modal, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Input, Label } from "reactstrap";
import panne from '../../redux/reducers/pannesReducer';

function ViewMore({ show, handleClose, rowID }) {
  const {
    numero,
    date,
    cause,
    piecejointe,
    chauffeur,
    véhicule,
    lieu,
    etat,
  } = useSelector((state) => state.pannes).filter(
    ({ id }) => id === rowID
  )[0];

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Mission M{rowID[0]} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>pannes</h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">date:</h5>
              <p className="col-6 text-left">{date}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">cause:</h5>
              <p className="col-6 text-left">{cause}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">piecejointe:</h5>
              <p className="col-6 text-left">{piecejointe}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">chauffeur:</h5>
              <p className="col-6 text-left">{chauffeur}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">véhicule:</h5>
              <p className="col-6 text-left">{véhicule}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">lieu:</h5>
              <p className="col-6">{lieu}</p>
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
