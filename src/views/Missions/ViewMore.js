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
    nBT,
    dateBT,
    nBonReception,
    dateBonReception,
    produit,
    unite,
    lieuDepart,
    lieuArrive,
    distance,
    quantite,
    ecartPoids,
    etat,
  } = useSelector((state) => state.missions).filter(
    ({ id }) => id === rowID[0]
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

            <Row>
              <h5 className="text-info col-6">N° BT:</h5>
              <p className="col-6">{nBT}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date BT:</h5>
              <p className="col-6">{dateBT}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">N° bon réception:</h5>
              <p className="col-6">{nBonReception}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date bon réception:</h5>
              <p className="col-6">{dateBonReception}</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Produit :</h5>
              <p className="col-6">{produit}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Unité</h5>
              <p className="col-6">{unite}</p>
            </Row>
          </Col>

          <Col>
            <Row>
              <h5 className="text-info col-6">Lieu depart:</h5>
              <p className="col-6">{lieuDepart}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">lieu arrivée</h5>
              <p className="col-6">{lieuArrive}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Distance</h5>
              <p className="col-6">{distance}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Quantité</h5>
              <p className="col-6">{quantite}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Ecart poids</h5>
              <p className="col-6">{ecartPoids}</p>
            </Row>
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
