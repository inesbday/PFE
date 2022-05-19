import React from "react";
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
import CheckItem from "./CheckItem";
import CheckItemBefore from "./CheckItemBefore";

function OptionModalBefore({ show, handleClose }) {
  return (
    <Modal isOpen={show} toggle={handleClose} centered fullscreen="sm" size="l">
      <ModalHeader closeButton>Liste de controle entrée </ModalHeader>

      <ModalBody>
        <CheckItemBefore />
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleClose}>
          Annuler
        </Button>

        <Button color="success" onClick={handleClose}>
          Ajouter
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default OptionModalBefore;
