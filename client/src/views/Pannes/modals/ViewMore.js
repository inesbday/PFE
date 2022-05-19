import React from "react";

import { Modal, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

function ViewMore({ show, handleClose, rowID }) {
  const { date, cause, piecejointe, chauffeur, véhicule, lieu } = useSelector(
    (state) => state.pannes
  ).filter(({ id }) => id === rowID)[0];

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> panne M{rowID[0]} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>pannes</h4>
        </Row>

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
