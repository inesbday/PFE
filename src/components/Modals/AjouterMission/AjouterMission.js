import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Modal, Button, Row, Container, Col } from "react-bootstrap";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { addMission } from "../../../redux/actions/missionActions";
import { addNotification } from "../../../redux/actions/notificationsActions";

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function AjouterMission({ show, handleClose }) {
  const [state, setState] = useState({
    id: uuidv4(),
    numero: "",
    date: "",
    client: "",
    typeFacture: "",
    vehicule: "",
    remorque: "",
    chauffeur: "",
    representant: "",
    nBT: "",
    dateBT: "",
    nBonReception: "",
    dateBonReception: "",
    produit: "",
    unite: "",
    lieuDepart: "",
    lieuArrive: "",
    distance: "",
    quantite: "",
    ecartPoids: "",
    etat: "attente",
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addMission(state));
    dispatch(
      addNotification({ id: uuidv4(), date, seen: false, id_mission: state.id })
    );
    handleClose();
    toast.success("Mission ajouté avec succées");
  };

  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={handleClose}>Ajouter une mission</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* Left col */}
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="numero">
                      Numéro <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="numero"
                      name="numero"
                      type="text"
                      required
                      value={state.numero}
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>

                  <Col>
                    <Label for="date">
                      Date <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      onChange={(event) => changeCreds(event)}
                      value={state.date}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="client">
                      Client <strong className="text-danger">*</strong>
                    </Label>

                    <Input
                      id="client"
                      name="client"
                      type="select"
                      value={state.client}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Mostfa</option>
                      <option>Hmed</option>
                      <option>Alekhandro</option>
                      <option>Tijeni</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="typeFacture">
                      Type de facturation{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="typeFacture"
                      name="typeFacture"
                      type="select"
                      value={state.typeFacture}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="vehicule">
                      Véhicule <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="vehicule"
                      name="vehicule"
                      type="select"
                      value={state.vehicule}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>V 1</option>
                      <option>V 2</option>
                      <option>V 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="remorque">
                      Remorque <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="remorque"
                      name="remorque"
                      type="select"
                      value={state.remorque}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>R 1</option>
                      <option>R 2</option>
                      <option>R 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="chauffeur">
                      Chauffeur <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="chauffeur"
                      name="chauffeur"
                      type="select"
                      required
                      value={state.chauffeur}
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Ch 1</option>
                      <option>Ch 2</option>
                      <option>Ch 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="represntant">
                      Representant <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="representant"
                      name="representant"
                      type="select"
                      required
                      value={state.representant}
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>R 1</option>
                      <option>R 2</option>
                      <option>R 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="nBT">
                      N° BT <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="nBT"
                      name="nBT"
                      type="text"
                      placeholder="N° bon de réception"
                      value={state.nBT}
                      required
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="dateBT">
                      Date BT <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="dateBT"
                      name="dateBT"
                      type="date"
                      value={state.dateBT}
                      required
                      onChange={(event) => changeCreds(event)}
                    ></Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="nBonReception">
                      N° bon de réception{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="nBonReception"
                      name="nBonReception"
                      type="text"
                      placeholder="N° bon de réception"
                      value={state.nBonReception}
                      required
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="dateBonReception">
                      Date bon de réception{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="dateBonReception"
                      name="dateBonReception"
                      type="date"
                      value={state.dateBonReception}
                      required
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="produit">
                      Produit <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="produit"
                      name="produit"
                      type="select"
                      value={state.produit}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Produit 1</option>
                      <option>Produit 2</option>
                      <option>Produit 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="unite">
                      Unité <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="produit"
                      name="unite"
                      type="select"
                      value={state.unite}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Unité 1</option>
                      <option>Unité 2</option>
                      <option>Unité 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
            </Col>

            {/* Right col */}
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="lieudepart">
                      Lieu de depart <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="lieudepart"
                      name="lieuDepart"
                      type="select"
                      value={state.lieuDepart}
                      onChange={(event) => changeCreds(event)}
                      required
                    >
                      <option>Fait votre choix...</option>
                      <option>Tunis</option>
                      <option>Sousse</option>
                      <option>Sfax</option>
                      <option>Monastir</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="lieuarrivée">
                      Lieu d'arrivé <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="lieuarrivé"
                      name="lieuArrive"
                      type="select"
                      value={state.lieuArrive}
                      onChange={(event) => changeCreds(event)}
                      required
                    >
                      <option>Fait votre choix...</option>
                      <option>Tunis</option>
                      <option>Sousse</option>
                      <option>Sfax</option>
                      <option>Monastir</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="distance">
                      Distance <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="distance"
                      name="distance"
                      type="text"
                      value={state.distance}
                      placeholder="0"
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="Quantité">
                      Quantité <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="quantité"
                      name="quantite"
                      type="text"
                      value={state.quantite}
                      placeholder="0.000"
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="Ecart Poids">
                      Ecart Poids <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="ecartPoids"
                      name="ecartPoids"
                      type="text"
                      placeholder="0.000"
                      value={state.ecartPoids}
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>

      <ModalFooter className="d-flex justify-content-end">
        <Button color="light" onClick={handleClose}>
          Annuler
        </Button>

        <Button color="success" onClick={handleSubmit}>
          Ajouter
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AjouterMission;
