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

function AjouterUser({ show, handleClose }) {
  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={handleClose}>
        <h3>Ajouter un nouvel utilisateur</h3>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* Left col */}
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="numero">
                      Nom d'utilisateur{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="nomuser"
                      name="nomuser"
                      type="text"
                      required
                      placeholder="nom user"
                    />
                  </Col>

                  <Col>
                    <Label for="numero">
                      Prenom utilisateur{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="prenomutilisateur"
                      name="prenomutilisateur"
                      type="text"
                      required
                      placeholder="prenom utilisateur"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="nBonReception">
                      Email <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email@email.com"
                    />
                  </Col>

                  <Col>
                    <FormGroup>
                      <Row>
                        <Col>
                          <Label for="nBonReception">
                            N° de telephone{" "}
                            <strong className="text-danger">*</strong>
                          </Label>
                          <Input
                            id="nTelephone"
                            name="nTelephone"
                            type="text"
                            placeholder="N° de telephone"
                            required
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="nBonReception">
                      Mot de passe <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="motdepasse"
                      name="motdepasse"
                      type="text"
                      placeholder="motdepasse"
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Label for="role">
                    Role <strong className="text-danger">*</strong>
                  </Label>
                  <Input id="role" name="role" type="select" required>
                    <option>Fait votre choix...</option>
                    <option>R 1</option>
                    <option>R 2</option>
                    <option>R 3</option>
                  </Input>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="photoUtilisateur">
                      Photo utilisateur{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="photoutilisateur"
                      name="photoutilisateur"
                      type="text"
                      placeholder="photo utilisateur"
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>

            {/* Right col */}
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

export default AjouterUser;
