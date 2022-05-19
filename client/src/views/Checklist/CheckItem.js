import React from "react";
import { CustomInput, Button, Form, FormGroup, Label } from "reactstrap";

function CheckItem() {
  return (
    <form>
      <FormGroup>
        <Label for="exampleCheckbox">
          {" "}
          <h4>Liste de controle : aprés chargement</h4>
        </Label>
        <div>
          <CustomInput
            type="checkbox"
            id="example1"
            label="Ordre de transport"
          />
          <CustomInput
            type="textarea"
            placeholder="Observation"
            id="example2"
            label="Observation"
          />
        </div>
      </FormGroup>

      <FormGroup>
        <CustomInput
          type="checkbox"
          id="example3"
          label="Feuille de plombage"
        />
        <CustomInput
          type="textarea"
          placeholder="Observation"
          id="example4"
          label="Observation"
        />
      </FormGroup>
      <FormGroup>
        <CustomInput type="checkbox" id="example5" label="BL/ F" />
        <CustomInput
          type="textarea"
          placeholder="Observation"
          id="example6"
          label="Observation"
        />
      </FormGroup>

      <FormGroup>
        <CustomInput type="checkbox" id="example7" label="Carte exploitaion" />
        <CustomInput
          type="textarea"
          placeholder="Observation"
          id="example8"
          label="Observation"
        />
      </FormGroup>
    </form>
  );
}

export default CheckItem;
