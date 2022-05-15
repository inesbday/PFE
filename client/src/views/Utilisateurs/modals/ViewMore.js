import React from "react";

import { Modal, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

function ViewMore({ show, handleClose, rowID }) {
  const { nom, prenom, email, numtel, role, datecreation } = useSelector(
    (state) => state.users
  ).filter(({ id }) => id === rowID)[0];

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Utilisateur n: {rowID} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Details utilisateurs</h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Nom :</h5>
              <p className="col-6 text-left">{nom}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Prenom:</h5>
              <p className="col-6 text-left">{prenom}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">E-mail :</h5>
              <p className="col-6 text-left">{email}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Numero de telephone:</h5>
              <p className="col-6 text-left">{numtel}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Role</h5>
              <p className="col-6">{role}</p>
            </Row>
          </Col>

          <Col>
            <Row>
              <h5 className="text-info col-6">Date de creation</h5>
              <p className="col-6">{datecreation}</p>
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
