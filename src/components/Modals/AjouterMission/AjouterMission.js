import React from "react";

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

function AjouterMission({ show, handleClose }) {
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
                      value="980"
                    />
                  </Col>

                  <Col>
                    <Label for="date">
                      Date <strong className="text-danger">*</strong>
                    </Label>
                    <Input id="date" name="date" type="date" required />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="client">
                      Client <strong className="text-danger">*</strong>
                    </Label>
                    <Input id="client" name="client" type="select" required>
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
                      required
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
                    <Input id="vehicule" name="vehicule" type="select" required>
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
                    <Input id="remorque" name="remorque" type="select" required>
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
                      required
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
                      required
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
                      required
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
                      required
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
                    <Input id="produit" name="produit" type="select" required>
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
                    <Input id="produit" name="unite" type="select" required>
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
                      name="lieudepart"
                      type="select"
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
                      name="lieuarrivé"
                      type="select"
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
                      placeholder="0"
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
                      name="quantité"
                      type="text"
                      placeholder="0.000"
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

        <Button color="success" onClick={handleClose}>
          Ajouter
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AjouterMission;
