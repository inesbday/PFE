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

//import { addNotification } from "../../../redux/actions/notificationsActions";
import { addUser } from "../../../redux/actions/usersActions";

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function AjouterUser({ show, handleClose }) {
  const [state, setState] = useState({
    id: uuidv4(),
    nom: "",
    prenom: "",
    email: "",
    numtel: "",
    role: "",
    datecreation: "",
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addUser(state));

    handleClose();
  };

  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={handleClose}>Ajouter un utilisateur </ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* Left col */}
            <FormGroup>
              <Row>
                <Col>
                  <Label for="nom">
                    Nom <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    value={state.nom}
                    onChange={(event) => changeCreds(event)}
                  />
                </Col>

                <Col>
                  <Label for="prenom">
                    Prenom <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    value={state.prenom}
                    onChange={(event) => changeCreds(event)}
                  />
                </Col>

                <Label for="email">
                  Adresse Email <strong className="text-danger">*</strong>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  required
                  value={state.email}
                  onChange={(event) => changeCreds(event)}
                />

                <Col>
                  <Label for="numtel">
                    N Telephone <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="numtel"
                    name="numtel"
                    type="numtel"
                    onChange={(event) => changeCreds(event)}
                    value={state.numtel}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col>
                  <Label for="typeFacture">
                    role <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    type="select"
                    value={state.typeFacture}
                    required
                    onChange={(event) => changeCreds(event)}
                  >
                    <option>Fait votre choix...</option>
                    <option>Chauffeur</option>
                    <option>Mecanicien</option>
                    <option>Chef de parc</option>
                  </Input>
                </Col>

                <Col>
                  <Label for="datecreation">
                    datecreation <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="datecreation"
                    name="datecreation"
                    type="text"
                    placeholder="datecreation"
                    value={state.datecreation}
                    required
                    onChange={(event) => changeCreds(event)}
                  />
                </Col>
              </Row>
            </FormGroup>

            {/* Right col */}
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

export default AjouterUser;
